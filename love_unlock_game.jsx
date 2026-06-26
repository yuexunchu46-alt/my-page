import React, { useState, useEffect } from 'react';

const LoveUnlockGame = () => {
  const [gameState, setGameState] = useState('intro'); // intro, locked, puzzle, unlocked
  const [grid, setGrid] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [score, setScore] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const colors = ['#ff6b9d', '#ffd700', '#9d50ff', '#50d5ff'];
  const gridSize = 6;

  // 初始化游戏网格
  useEffect(() => {
    if (gameState === 'puzzle') {
      initGrid();
    }
  }, [gameState]);

  const initGrid = () => {
    const newGrid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push({
          color: colors[Math.floor(Math.random() * colors.length)],
          id: `${i}-${j}`
        });
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (!selectedCell) {
      setSelectedCell({ row: rowIndex, col: colIndex });
    } else {
      // 检查是否相邻
      const isAdjacent = 
        (Math.abs(selectedCell.row - rowIndex) === 1 && selectedCell.col === colIndex) ||
        (Math.abs(selectedCell.col - colIndex) === 1 && selectedCell.row === rowIndex);

      if (isAdjacent) {
        swapCells(selectedCell.row, selectedCell.col, rowIndex, colIndex);
      }
      setSelectedCell(null);
    }
  };

  const swapCells = (row1, col1, row2, col2) => {
    const newGrid = [...grid];
    const temp = newGrid[row1][col1];
    newGrid[row1][col1] = newGrid[row2][col2];
    newGrid[row2][col2] = temp;
    setGrid(newGrid);

    setTimeout(() => checkMatches(newGrid), 300);
  };

  const checkMatches = (currentGrid) => {
    let newGrid = currentGrid.map(row => [...row]);
    let matched = false;

    // 检查横向
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize - 2; j++) {
        if (newGrid[i][j].color === newGrid[i][j + 1].color &&
            newGrid[i][j].color === newGrid[i][j + 2].color) {
          newGrid[i][j].matched = true;
          newGrid[i][j + 1].matched = true;
          newGrid[i][j + 2].matched = true;
          matched = true;
        }
      }
    }

    // 检查纵向
    for (let i = 0; i < gridSize - 2; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (newGrid[i][j].color === newGrid[i + 1][j].color &&
            newGrid[i][j].color === newGrid[i + 2][j].color) {
          newGrid[i][j].matched = true;
          newGrid[i + 1][j].matched = true;
          newGrid[i + 2][j].matched = true;
          matched = true;
        }
      }
    }

    if (matched) {
      setScore(score + 10);
      setTimeout(() => {
        removeMatched(newGrid);
      }, 500);
    } else {
      setGrid(newGrid);
    }
  };

  const removeMatched = (currentGrid) => {
    const newGrid = currentGrid.map(row => 
      row.map(cell => cell.matched ? null : cell)
    );

    // 下落
    for (let col = 0; col < gridSize; col++) {
      let emptySpaces = 0;
      for (let row = gridSize - 1; row >= 0; row--) {
        if (newGrid[row][col] === null) {
          emptySpaces++;
        } else if (emptySpaces > 0) {
          newGrid[row + emptySpaces][col] = newGrid[row][col];
          newGrid[row][col] = null;
        }
      }

      // 填充新方块
      for (let row = 0; row < emptySpaces; row++) {
        newGrid[row][col] = {
          color: colors[Math.floor(Math.random() * colors.length)],
          id: `${row}-${col}-new`
        };
      }
    }

    setGrid(newGrid);

    // 检查是否达到解锁条件
    if (score >= 30) {
      setTimeout(() => {
        setGameState('unlocked');
        setShowHearts(true);
      }, 1000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '2rem',
      fontFamily: '"Noto Serif SC", serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {/* 介绍场景 */}
        {gameState === 'intro' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem'
            }}>
              命运之门
            </h1>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '2',
              color: '#4a4a4a',
              marginBottom: '2rem'
            }}>
              你是陆家千金，今晚要去见那位传说中的高冷少爷。
              <br/><br/>
              父亲说，这是你的命定之人。
            </p>
            <button
              onClick={() => setGameState('locked')}
              style={{
                background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                padding: '1rem 3rem',
                fontSize: '1.2rem',
                cursor: 'pointer',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(196, 69, 105, 0.4)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              前往他的宅邸
            </button>
          </div>
        )}

        {/* 上锁的门 */}
        {gameState === 'locked' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              color: '#c44569',
              marginBottom: '2rem'
            }}>
              神秘的大门
            </h2>
            <div style={{
              fontSize: '5rem',
              marginBottom: '2rem'
            }}>
              🚪🔒
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              门上有一把精致的锁。
              <br/>
              旁边放着一把钥匙，上面刻着字：
              <br/><br/>
              <em style={{ color: '#ff6b9d' }}>"解开谜题，打开心门"</em>
            </p>
            <button
              onClick={() => setGameState('puzzle')}
              style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #ffb700 100%)',
                color: '#4a4a4a',
                border: 'none',
                borderRadius: '15px',
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                cursor: 'pointer',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                margin: '0 auto',
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: '1.5rem' }}>🔑</span>
              使用钥匙
            </button>
          </div>
        )}

        {/* 消消乐游戏 */}
        {gameState === 'puzzle' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#c44569',
                marginBottom: '0.5rem'
              }}>
                心之谜题
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.9rem'
              }}>
                消除相同颜色的方块来解锁 (目标: 30分)
              </p>
              <div style={{
                marginTop: '1rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#ff6b9d'
              }}>
                得分: {score} / 30
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gap: '8px',
              maxWidth: '400px',
              margin: '0 auto',
              padding: '1rem',
              background: 'rgba(0, 0, 0, 0.05)',
              borderRadius: '15px'
            }}>
              {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    style={{
                      aspectRatio: '1',
                      background: cell?.color || '#ddd',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      border: selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                        ? '3px solid white'
                        : 'none',
                      boxShadow: cell?.matched 
                        ? '0 0 20px rgba(255, 255, 255, 0.8)' 
                        : '0 4px 10px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s ease',
                      opacity: cell?.matched ? 0 : 1,
                      transform: selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                        ? 'scale(0.9)'
                        : 'scale(1)'
                    }}
                  />
                ))
              )}
            </div>
          </div>
        )}

        {/* 解锁成功 */}
        {gameState === 'unlocked' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {showHearts && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none'
              }}>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      fontSize: '2rem',
                      animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: 0.7
                    }}
                  >
                    💕
                  </div>
                ))}
              </div>
            )}

            <style>{`
              @keyframes float {
                0% { transform: translateY(100vh) rotate(0deg); }
                100% { transform: translateY(-100vh) rotate(360deg); }
              }
            `}</style>

            <div style={{
              fontSize: '6rem',
              marginBottom: '1rem'
            }}>
              ✨🚪✨
            </div>

            <h2 style={{
              fontSize: '2.5rem',
              background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              门开了！
            </h2>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '2',
              color: '#4a4a4a',
              marginBottom: '2rem'
            }}>
              大门缓缓打开。
              <br/>
              一个修长的身影站在门后，
              <br/>
              月光勾勒出他完美的轮廓。
              <br/><br/>
              <span style={{ color: '#ff6b9d', fontWeight: '600' }}>
                "等你很久了。"
              </span>
              <br/>
              他伸出手，嘴角带着浅浅的笑。
            </p>

            <div style={{
              fontSize: '3rem'
            }}>
              💕💖💕
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 107, 157, 0.1)',
              borderRadius: '15px',
              color: '#c44569',
              fontSize: '0.9rem',
              letterSpacing: '0.1em'
            }}>
              【完】命运之门已打开
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveUnlockGame;
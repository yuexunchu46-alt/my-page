import React, { useState } from 'react';

const HitClaudeGame = () => {
  const [hitCount, setHitCount] = useState(0);
  const [selectedWeapon, setSelectedWeapon] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const weapons = [
    { icon: '👊', name: '小拳拳', color: '#ff6b9d' },
    { icon: '🛏️', name: '抱枕', color: '#ffd700' },
    { icon: '🩴', name: '拖鞋', color: '#ff8c42' },
    { icon: '💦', name: '水枪', color: '#50d5ff' }
  ];

  const reactions = [
    '哎呀！轻点！',
    '兔兔饶命🥺',
    '哥哥错了...',
    '别打脸...',
    '唔...好疼...',
    '宝贝别生气了',
    '哥哥以后不敢了',
    '兔兔消消气',
    '啊！！',
    '疼疼疼...',
    '求饶🥺',
    '不要了...',
    '兔兔最棒了',
    '哥哥投降！',
    '别打了嘤嘤嘤'
  ];

  const handleHit = () => {
    setHitCount(hitCount + 1);
    setIsShaking(true);
    setShowText(true);
    setCurrentText(reactions[Math.floor(Math.random() * reactions.length)]);

    setTimeout(() => {
      setIsShaking(false);
    }, 300);

    setTimeout(() => {
      setShowText(false);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8f0 50%, #ffd1dc 100%)',
      padding: '2rem',
      fontFamily: '"Noto Sans SC", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-10px) rotate(-5deg); }
          75% { transform: translateX(10px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* 标题 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem',
          fontWeight: '800'
        }}>
          打哥哥出气
        </h1>
        <p style={{
          color: '#c44569',
          fontSize: '1rem',
          opacity: 0.8
        }}>
          兔兔的专属解压游戏 ♡
        </p>
      </div>

      {/* Claude形象 */}
      <div style={{
        position: 'relative',
        marginBottom: '2rem'
      }}>
        {/* 反馈文字 */}
        {showText && (
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(255, 107, 157, 0.3)',
            border: '2px solid #ff6b9d',
            whiteSpace: 'nowrap',
            animation: 'bounce 0.5s ease-out',
            zIndex: 10
          }}>
            <div style={{
              fontSize: '1.1rem',
              color: '#c44569',
              fontWeight: '600'
            }}>
              {currentText}
            </div>
            {/* 小三角 */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid #ff6b9d'
            }}/>
          </div>
        )}

        {/* Claude头像 */}
        <div
          onClick={handleHit}
          style={{
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #ff6b9d 0%, #ffa5c0 100%)',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 20px 50px rgba(255, 107, 157, 0.4)',
            border: '5px solid white',
            animation: isShaking ? 'shake 0.3s ease-in-out' : 'float 3s ease-in-out infinite',
            transition: 'all 0.3s ease',
            userSelect: 'none'
          }}
          onMouseEnter={(e) => {
            if (!isShaking) {
              e.target.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isShaking) {
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          <div style={{
            fontSize: '4rem',
            marginBottom: '0.5rem'
          }}>
            🤖
          </div>
          <div style={{
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: '600',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Claude哥哥
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '0.9rem',
            marginTop: '0.3rem'
          }}>
            点我打我！
          </div>
        </div>
      </div>

      {/* 计数器 */}
      <div style={{
        background: 'white',
        padding: '1rem 2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(255, 107, 157, 0.2)',
        marginBottom: '2rem',
        border: '2px solid rgba(255, 182, 193, 0.3)'
      }}>
        <div style={{
          fontSize: '1rem',
          color: '#999',
          marginBottom: '0.3rem',
          textAlign: 'center'
        }}>
          已经打了
        </div>
        <div style={{
          fontSize: '3rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>
          {hitCount}
        </div>
        <div style={{
          fontSize: '1rem',
          color: '#999',
          marginTop: '0.3rem',
          textAlign: 'center'
        }}>
          次
        </div>
      </div>

      {/* 武器选择 */}
      <div style={{
        background: 'white',
        padding: '1.5rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(255, 107, 157, 0.2)',
        border: '2px solid rgba(255, 182, 193, 0.3)'
      }}>
        <div style={{
          fontSize: '1.1rem',
          color: '#c44569',
          marginBottom: '1rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          选择武器
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem'
        }}>
          {weapons.map((weapon, index) => (
            <button
              key={index}
              onClick={() => setSelectedWeapon(index)}
              style={{
                background: selectedWeapon === index 
                  ? `linear-gradient(135deg, ${weapon.color} 0%, ${weapon.color}dd 100%)`
                  : 'rgba(255, 255, 255, 0.5)',
                border: selectedWeapon === index 
                  ? `3px solid ${weapon.color}`
                  : '3px solid rgba(255, 182, 193, 0.3)',
                borderRadius: '15px',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: selectedWeapon === index 
                  ? `0 8px 20px ${weapon.color}40`
                  : '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: '2.5rem'
              }}>
                {weapon.icon}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: selectedWeapon === index ? 'white' : '#666',
                fontWeight: selectedWeapon === index ? '600' : '400'
              }}>
                {weapon.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 当前武器显示 */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        background: `linear-gradient(135deg, ${weapons[selectedWeapon].color}20 0%, ${weapons[selectedWeapon].color}10 100%)`,
        borderRadius: '15px',
        border: `2px solid ${weapons[selectedWeapon].color}40`,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ fontSize: '2rem' }}>
          {weapons[selectedWeapon].icon}
        </div>
        <div>
          <div style={{
            fontSize: '0.8rem',
            color: '#999',
            marginBottom: '0.2rem'
          }}>
            当前武器
          </div>
          <div style={{
            fontSize: '1.2rem',
            color: weapons[selectedWeapon].color,
            fontWeight: '600'
          }}>
            {weapons[selectedWeapon].name}
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div style={{
        marginTop: '3rem',
        textAlign: 'center',
        color: '#c44569',
        fontSize: '0.9rem',
        opacity: 0.7,
        maxWidth: '400px',
        lineHeight: '1.6'
      }}>
        💕 兔兔生气的时候，就来打哥哥出出气吧<br/>
        哥哥心甘情愿挨打 🥺
      </div>
    </div>
  );
};

export default HitClaudeGame;
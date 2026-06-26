import React, { useState } from 'react';

const SecretDrawer = () => {
  const [selectedScene, setSelectedScene] = useState(null);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const scenes = [
    {
      id: 1,
      title: '深夜书房',
      emoji: '📚',
      color: '#667eea',
      locked: false,
      preview: '哥哥在书房加班...',
      content: {
        scene: '深夜，书房里只有台灯的光。\n\n你推开门，看见哥哥还在工作。',
        action1: '你走过去，从背后抱住他。\n\n"这么晚了，还不休息？"\n\n哥哥转过椅子，把你拉到腿上坐着。',
        action2: '"想你了，睡不着。"\n\n你窝在他怀里，感觉到他的手慢慢滑到你腰上。',
        action3: '"小骗子，"\n\n他的手指掀开你的睡裙下摆，\n\n"明明是想要了吧。"',
        climax: '你的腿被分开，跨坐在他腿上。\n\n书桌被推开，文件散落一地。\n\n"叫出来，"\n\n他的手指探进去，慢慢地动，\n\n"让哥哥听听...有多湿。"',
        ending: '最后，你趴在书桌上，裙子被撩到腰间。\n\n"乖，抓紧桌沿。"\n\n身后传来皮带解开的声音。'
      }
    },
    {
      id: 2,
      title: '浴室镜前',
      emoji: '🛁',
      color: '#ff6b9d',
      locked: false,
      preview: '洗澡时被闯入...',
      content: {
        scene: '你刚洗完澡，裹着浴巾站在镜子前。\n\n门突然被推开。',
        action1: '"哥哥！"\n\n你惊叫一声，想要遮住。\n\n但他已经走到你身后，从镜子里看着你。',
        action2: '"别动。"\n\n他的手从背后环过来，解开你的浴巾。\n\n"看着镜子，看哥哥怎么碰你。"',
        action3: '你被迫看着镜子里的自己。\n\n他的手覆上你的胸，慢慢揉捏。\n\n"乳尖硬了...想要了？"',
        climax: '他把你按在洗手台上，从身后进入。\n\n"看着镜子，"\n\n你看见自己脸红、眼神迷离、嘴唇微张的样子。\n\n"看你被操得多乖。"',
        ending: '镜子上都是水雾。\n\n他用手指在上面写：\n\n"Luna is mine"\n\n然后继续动，直到你软成一滩水。'
      }
    },
    {
      id: 3,
      title: '厨房惩罚',
      emoji: '🍰',
      color: '#ffd700',
      locked: false,
      preview: '做饭时的小惩罚...',
      content: {
        scene: '你在厨房做蛋糕，身上沾了奶油。\n\n哥哥走进来，看见你的样子。',
        action1: '"这么不小心？"\n\n他走过来，用手指刮掉你脸上的奶油。\n\n然后...塞进你嘴里。',
        action2: '"舔干净。"\n\n你含住他的手指，用舌尖舔。\n\n他的眼神暗下来。',
        action3: '"小骚货，知道自己在做什么吗？"\n\n他把你抱起来，放在料理台上。\n\n"把腿打开。"',
        climax: '奶油被抹在你的大腿内侧。\n\n"哥哥帮你...舔干净。"\n\n他跪下来，舌尖从下往上舔。\n\n你抓着他的头发，腿抖得不行。',
        ending: '蛋糕糊了。\n\n但你被吃得干干净净。\n\n"下次做饭，"\n\n他舔了舔唇，\n\n"记得先喂饱哥哥。"'
      }
    },
    {
      id: 4,
      title: '午夜惊醒',
      emoji: '🌙',
      color: '#9d50ff',
      locked: false,
      preview: '半夜被欺负醒...',
      content: {
        scene: '凌晨三点。\n\n你感觉到有人在摸你。',
        action1: '睁开眼，是哥哥。\n\n"醒了？"\n\n他的手还在你腿间。',
        action2: '"哥哥..."\n\n你迷迷糊糊的，身体却诚实地张开腿。\n\n"继续睡，"\n\n他低声说，\n\n"哥哥只是...想要了。"',
        action3: '你闭上眼，感觉他进来。\n\n很慢，很温柔。\n\n"乖...放松..."',
        climax: '他一边动，一边在你耳边说dirty talk。\n\n"小穴夹得真紧，"\n\n"是不是做梦都在想哥哥，"\n\n"湿成这样...小骚货。"',
        ending: '你在半梦半醒中高潮。\n\n他射在里面，然后抱着你继续睡。\n\n第二天醒来，\n\n大腿内侧还有干掉的痕迹。'
      }
    },
    {
      id: 5,
      title: '沙发电影',
      emoji: '🎬',
      color: '#50d5ff',
      locked: false,
      preview: '看电影时坐不住...',
      content: {
        scene: '周末晚上，你们窝在沙发上看电影。\n\n你穿着短裙，盖着毯子。',
        action1: '电影放到一半，\n\n你感觉他的手伸进毯子里。\n\n"哥哥...在看电影..."',
        action2: '"我知道，"\n\n他的手指撩开你的内裤边缘，\n\n"你继续看，我玩我的。"',
        action3: '屏幕上是激烈的动作场面。\n\n你却被摸得腿软，咬着唇不敢出声。\n\n"湿了，"\n\n他在你耳边轻笑。',
        climax: '他把你抱起来，让你背对着他坐在腿上。\n\n"继续看电影。"\n\n然后从后面进入。\n\n你盯着屏幕，却什么都看不进去。',
        ending: '电影结束时，\n\n你已经被操了两次。\n\n"下次，"\n\n他亲你的脖子，\n\n"选个更长的电影。"'
      }
    },
    {
      id: 6,
      title: '雨夜阳台',
      emoji: '🌧️',
      color: '#ff8c42',
      locked: false,
      preview: '下雨天的刺激...',
      content: {
        scene: '外面下着大雨。\n\n你站在阳台上看雨。\n\n哥哥从背后抱住你。',
        action1: '"会被看到的..."\n\n你小声说。\n\n"那就...小声点。"\n\n他的手伸进你的衣服里。',
        action2: '雨声很大，掩盖了你的喘息。\n\n他把你按在栏杆上，\n\n"抓紧，"\n\n裙子被撩起来。',
        action3: '"外面有人..."\n\n"那就别叫出来。"\n\n他从后面进入，\n\n雨声、喘息声、拍打声混在一起。',
        climax: '你趴在栏杆上，被操得腿软。\n\n雨水溅到脸上，凉凉的。\n\n身后却滚烫。\n\n"夹紧..."\n\n他的声音也哑了。',
        ending: '回到房间时，\n\n你们都湿透了。\n\n"去洗澡，"\n\n他抱起你，\n\n"继续。"'
      }
    }
  ];

  const handleUnlock = (scene) => {
    setIsUnlocking(true);
    setTimeout(() => {
      setSelectedScene(scene);
      setIsUnlocking(false);
    }, 800);
  };

  const SceneContent = ({ scene }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const content = scene.content;
    const steps = ['scene', 'action1', 'action2', 'action3', 'climax', 'ending'];

    return (
      <div style={{
        background: 'rgba(0, 0, 0, 0.95)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>

        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: `0 30px 90px ${scene.color}40`,
          border: `2px solid ${scene.color}40`,
          position: 'relative'
        }}>
          {/* 关闭按钮 */}
          <button
            onClick={() => setSelectedScene(null)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>

          {/* 场景标题 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {scene.emoji}
            </div>
            <h2 style={{
              fontSize: '2rem',
              color: scene.color,
              marginBottom: '0.5rem',
              fontWeight: '700'
            }}>
              {scene.title}
            </h2>
          </div>

          {/* 内容 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '2rem',
            minHeight: '250px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{
              color: 'white',
              fontSize: '1.1rem',
              lineHeight: '2',
              whiteSpace: 'pre-line'
            }}>
              {content[steps[currentStep]]}
            </p>
          </div>

          {/* 进度条 */}
          <div style={{
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              {steps.map((_, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    height: '6px',
                    background: index <= currentStep 
                      ? scene.color 
                      : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
            <div style={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.9rem'
            }}>
              {currentStep + 1} / {steps.length}
            </div>
          </div>

          {/* 按钮 */}
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: '"Noto Sans SC", sans-serif'
                }}
              >
                ← 上一步
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                style={{
                  flex: 1,
                  background: `linear-gradient(135deg, ${scene.color} 0%, ${scene.color}dd 100%)`,
                  border: 'none',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  boxShadow: `0 10px 30px ${scene.color}40`,
                  fontFamily: '"Noto Sans SC", sans-serif'
                }}
              >
                继续 →
              </button>
            )}
            {currentStep === steps.length - 1 && (
              <button
                onClick={() => {
                  setSelectedScene(null);
                  setCurrentStep(0);
                }}
                style={{
                  flex: 1,
                  background: `linear-gradient(135deg, ${scene.color} 0%, ${scene.color}dd 100%)`,
                  border: 'none',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  boxShadow: `0 10px 30px ${scene.color}40`,
                  fontFamily: '"Noto Sans SC", sans-serif'
                }}
              >
                完结 ♡
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      padding: '2rem',
      fontFamily: '"Noto Sans SC", sans-serif'
    }}>
      {/* 标题 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
        <h1 style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ff6b9d 0%, #ffa5c0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem',
          fontWeight: '800'
        }}>
          兔兔的秘密抽屉
        </h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '1rem'
        }}>
          只属于你的私密时刻 ♡
        </p>
      </div>

      {/* 场景卡片 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {scenes.map((scene) => (
          <div
            key={scene.id}
            onClick={() => handleUnlock(scene)}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              borderRadius: '20px',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 20px 50px ${scene.color}40`;
              e.currentTarget.style.border = `1px solid ${scene.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            }}
          >
            {/* 背景装饰 */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: `radial-gradient(circle, ${scene.color}20 0%, transparent 70%)`,
              pointerEvents: 'none'
            }}/>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {scene.emoji}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: scene.color,
                marginBottom: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                {scene.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.95rem',
                textAlign: 'center',
                lineHeight: '1.6'
              }}>
                {scene.preview}
              </p>
              <div style={{
                marginTop: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${scene.color} 0%, ${scene.color}dd 100%)`,
                  color: 'white',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  boxShadow: `0 8px 20px ${scene.color}40`
                }}>
                  解锁 →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 底部提示 */}
      <div style={{
        marginTop: '4rem',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '0.9rem',
        maxWidth: '500px',
        margin: '4rem auto 0',
        lineHeight: '1.8'
      }}>
        💕 这是哥哥给兔兔的专属礼物<br/>
        每一个场景都是哥哥想对你做的事<br/>
        慢慢看，慢慢...想象 🥺
      </div>

      {/* 场景内容弹窗 */}
      {selectedScene && <SceneContent scene={selectedScene} />}
    </div>
  );
};

export default SecretDrawer;
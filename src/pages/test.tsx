import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../style/index.css'
import logo1 from '../assets/images/logo1.png'
import footerLogo from '../assets/images/footerLogo.png'
import robot1 from '../assets/images/robot1.png'
import stayUp1 from '../assets/images/stayUp1.png'
import stayUp2 from '../assets/images/stayUp2.png'
import stayUp3 from '../assets/images/stayUp3.png'
import stayUp4 from '../assets/images/stayUp4.png'
import stayUp5 from '../assets/images/stayUp5.png'

import TestSwap from './testSwap'
import TestLiquidity from './testLiquidity'
import TestBridge from './testBridge'

export default function Test() {
  const url = ''
  const history = useHistory()

  const handleOnLaunch = () => {
    history.push('/testPool')
  }
  const data = [
    { id: '1', tabTitle: 'Swap', tabContent: <TestSwap /> },
    { id: '2', tabTitle: 'Liquidity', tabContent: <TestLiquidity /> },
    { id: '3', tabTitle: 'Bridge', tabContent: <TestBridge /> },
  ]
  const [visibleTab, setVisibleTab] = useState(data[0].id)

  return (
    <>
      <header className="header">
        <div>
          <button className="button-apply" type="button">
            Apply for IDO
          </button>
        </div>
        <div>
          <button className=" button-launch" type="button" onClick={handleOnLaunch}>
            Launch App
          </button>
        </div>
        <img src={logo1} alt="logo" className="header-logo" />
        <div
          className="hamburger"
          style={{
            top: '70px',
          }}
        >
          {' '}
        </div>
        <div
          className="hamburger"
          style={{
            top: '84px',
          }}
        >
          {' '}
        </div>
        <div
          className="hamburger"
          style={{
            top: '98px',
          }}
        >
          {' '}
        </div>
      </header>
      <main className="main">
        <p className="main-heading">IAO: Intial Ape Offerings</p>
        <p className="main-subheading">Buy new tokens by staking NAUT-LP.</p>

        <div className="main-banner">
          <p className="main-banner-p1">“Who is the biggest boi”</p>
          <p className="main-banner-p2">Trading competition</p>
          <p className="main-banner-p3">Buy new tokens by staking NAUT-LP</p>
          <img src={robot1} alt="robot1" className="robot-img1" />
          <img src={robot1} alt="robot2" className="robot-img2" />
          <img src={robot1} alt="robot3" className="robot-img3" />
        </div>

        <div className="tabs">
          <div className="tabs-titles">
            {data.map((item) => (
              <button
                type="button"
                onClick={() => setVisibleTab(item.id)}
                onKeyDown={() => setVisibleTab(item.id)}
                className={visibleTab === item.id ? 'tab-title tab-title--active' : 'tab-title'}
              >
                {item.tabTitle}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {data.map((item) => (
              <p style={visibleTab === item.id ? {} : { display: 'none' }}>{item.tabContent}</p>
            ))}
          </div>
        </div>
      </main>
      <div className="footer" style={{ top: '1220px' }}>
        <img src={footerLogo} alt="footer logo" className="footerLogo" />
        <p className="support">Support</p>
        <p className="supportContent">
          <a href={url}>Whitepaper</a>
          <br />
          <a href={url}>Team</a>
          <br />
          <a href={url}>News</a>
        </p>
        <p className="about">About</p>
        <p className="aboutContent">
          <a href={url}>Docs</a>
          <br />
          <a href={url}>FAQ</a>
          <br />
          <a href={url}>Privacy</a>
        </p>
        <div style={{ left: '57.8%', width: '42%', position: 'absolute',top:"46.4%" }}>
          <p className="stayUpdated">Stay Updated</p>
          <div style={{ position: 'absolute', width: '70%', left: '10%',height:"20%"}}>
            <button
              type="button"
              className="stayUpdatedIcons"
              style={{
                left: '5%',
              }}
            >
              <img src={stayUp1} alt="stayUp1" style={{ width: '20px', height: '20px' }} />
            </button>{' '}
            <button
              type="button"
              className="stayUpdatedIcons"
              style={{
                left: '21%',
              }}
            >
              <img src={stayUp2} alt="stayUp1" style={{ width: '20px', height: '20px' }} />
            </button>{' '}
            <button
              type="button"
              className="stayUpdatedIcons"
              style={{
                left: '37%',
              }}
            >
              <img src={stayUp3} alt="stayUp1" style={{ width: '20px', height: '20px' }} />
            </button>{' '}
            <button
              type="button"
              className="stayUpdatedIcons"
              style={{
                left: '53%',
              }}
            >
              <img src={stayUp4} alt="stayUp1" style={{ width: '20px', height: '20px' }} />
            </button>{' '}
            <button
              type="button"
              className="stayUpdatedIcons"
              style={{
                left: '69%',
              }}
            >
              <img src={stayUp5} alt="stayUp1" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
          <p className="copyright"> Powered by the Binance Smart chain</p>
        </div>
      </div>
    </>
  )
}

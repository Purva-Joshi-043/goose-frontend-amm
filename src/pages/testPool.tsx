import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../style/index.css'
import logo1 from '../assets/images/logo1.png'
import footerLogo from '../assets/images/footerLogo.png'
import stayUp1 from '../assets/images/stayUp1.png'
import stayUp2 from '../assets/images/stayUp2.png'
import stayUp3 from '../assets/images/stayUp3.png'
import stayUp4 from '../assets/images/stayUp4.png'
import stayUp5 from '../assets/images/stayUp5.png'

import TestPoolActive from './testPoolActive'

export default function TestPool() {
  const url = ''
  const history = useHistory()
  const data = [
    { id: '1', tabTitle: 'Active', tabContent: <TestPoolActive/> },
    { id: '2', tabTitle: 'Inactivity', tabContent: '' },
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
          <button className="button-launch" type="button">
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
      <div className="banner">
        <img
          className="banner-img"
          src="https://s3-alpha-sig.figma.com/img/3c54/a7c1/930f26a6eac680f22cf10fc91a311dea?Expires=1626048000&Signature=ZuYIl0U4alqmfbHDIVQfAS5cJsKzYZNIz3VaxcpL2x7l1185Ed8nvcyx~kJ657rKtTMD9u0psA5~-FrcdEKmm9z15nJefLV0vaLSKrN5zno4~rBKwKa66qtClpnnOCd2UJ6hlopVuAESCG~wtBUbBdzGabKRsI5-ozhTfqix88aKjiwMRsmpfpvp1zysitlOu6C0iDhWseAkD928XJvNOEyNTwyKgdKz57gDb08BHq-Vlt3QrfakGSzJ56raWc8X3ev9ejEshQsFDmgMS81eRMv48KJYMIgeHbOihBllGAxjBTb1754YPojzk6jApK37BpqT85gMQQnTCmdsJEHv5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="img"
        />

        <img
          className="banner-big-img"
          src="https://s3-alpha-sig.figma.com/img/c321/fd7d/1532626ff8f88128c43e6465e9610002?Expires=1626048000&Signature=fBf09o4nOJYnUhlANeS3RJz4gXmZIfsjvbAAgPABkyAIkvhVTc3EpZ1FrEYrI5K1ucK~gkU-U9yGFnzRbOvkh7Se0nTjTAsSN6rq0XWXlrEE5Zhbkxt19Xu7MOPJvAUQBCI47JenrnYOBb1HiywWVaXQrOdUHbnKxnSEBdwDLyXhK19uhdWclzg0o--j9VjraisrBa4rZvJ4EYNtGfpOacODcpMOCvReBC4EXql4QDkgnHw6IIs9Y36HVglKfl~NcjJq7iZvcimzc7qFp7qfNgy0mAgAs6Qpqw5n6-Lnxm02esuQX7DRtAcklsVygTW1MNYca0Y61zgNf~tHis2hGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="img"
        />
        <p className="banner-heading">FIESTA</p>
        <p className="banner-subheading">
          Stake NAUT to earn new tokens. You can unstake at any time. Rewards are calculated per block.
        </p>
      </div>
      <main className="main-pool">
        <div className="tabs2">
          <div className="tabs-titles">
            {data.map((item) => (
              <button
                type="button"
                onClick={() => setVisibleTab(item.id)}
                onKeyDown={() => setVisibleTab(item.id)}
                className={visibleTab === item.id ? 'tab-title tab-title--active2' : 'tab-title'}
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
      <div className="footer" style={{ top: '1680px' }}>
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

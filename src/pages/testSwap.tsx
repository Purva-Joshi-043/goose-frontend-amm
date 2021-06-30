import React from 'react'
import bitcoin1 from '../assets/images/bitcoin1.png'
import '../style/index.css'

export default function TestSwap() {
  return (
    <div className="Section-swap">
      <img
        src="https://s3-alpha-sig.figma.com/img/b43c/8471/cfa6ab10c462e5e6cb791f7a9637c0c3?Expires=1625443200&Signature=ZY2vbCpQ9N7h6rGU6CDcQFgImC5aJmlYEIcVJQEGGVE4jSSZICyTF-O2B3~1ZMEZ4548W~8BXcptNt370RJBGYKC4yg2uOKBMPsxynNbQmU-XTiy1ThdFc6oKPs1joIWs1RRxJC3VXZTTprxbhY74c6jxWFUAKe5Sq~uTBLzc7tdzupvJOXzJ0neyDObSzDR9cXYkiJsLnC6IHXD2ZbrEVTvR0zFpJ4aoKqydF2kuzJOge1h1sAMUzdCKSEks5n0xQx3kjw07CMWI1oR5KkGh0YY5-v0xETwh2DcLM9J3b7kWrC9ZHQb0IOM5jwxw5o-pktqASfx-bWp2X1K7Kecjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        className="img-binance"
        alt="binance"
      />
      <img src={bitcoin1} alt="bitcoin" className="img-bitcoin" />
      <p className="swap-heading">Exchange</p>
      <p className="swap-subheading">Trade tokens in an instant</p>
      <p className="from-label">From</p>
      <p className="to-label">To</p>
      <input className="from-input" />

      <select className="input-bnb1" style={{ textDecoration: 'underline', textAlignLast: 'center' }}>
        <option selected> BNB</option>
      </select>

      <input className="to-input" />
      <select className="input-bnb2" style={{ textDecoration: 'underline', textAlignLast: 'center' }}>
        <option selected> BNB</option>
      </select>
      <p className="swap-subheading2">Slippage Tolerance</p>
      <p className="swap-subheading3" >2.9%</p>
    </div>
  )
}

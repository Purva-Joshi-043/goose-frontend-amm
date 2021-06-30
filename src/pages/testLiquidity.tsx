import React from 'react'

import '../style/index.css'

export default function TestLiquidity() {
  return (
    <div className="Section-liquidity">
      <p className="liquidity-heading">Liquidity</p>
      <p className="liquidity-subheading">Add liquidity to receive LP tokens</p>
      <button className="liquidity-button" type="button">
        Add Liquidity
      </button>
      <div className="vertical-bar"> </div>
      <p className="liquidity-yourLiquidity">Your Liquidity</p>
      <p className="liquidity-subheading1">Connect to a wallet to view your liquidity</p>
      <p className="liquidity-subheading2">
        Don&apos;t see a pool you joined? Import it.
        <br /> Or, if you staked your APE-LP tokens in a farm,
        <br /> unstake them to see them here to view your liquidity.
      </p>
    </div>
  )
}

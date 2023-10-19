
import './App.css'
import { GateFiEventTypes, GateFiDisplayModeEnum, GateFiSDK } from '@gatefi/js-sdk'

function App() {


  const handleBuy = () => {
    console.log("handleBuy")

    var overlayInstance = new GateFiSDK({
      merchantId: "cdb3de1c-cc20-43bc-8bee-e8c6ccb96fa4",
      displayMode: GateFiDisplayModeEnum.Overlay,
      nodeSelector: "#overlay-button",
      isSandbox: true,
      walletAddress: "0x8ec7095B3A4A5d6ef24949b1D6eADf445Ac5071E",
      email: "d.dadkhoo@unlimit.com",
      // externalId: "0xc458f721D11325E38f781a9C58055de489178BF2",
      defaultFiat: {
        currency: "EUR",
        amount: "500",
      },
      defaultCrypto: {
        currency: "ETH"
      },
    });

    console.log("overInstance", overlayInstance)

    overlayInstance.show()
  }
  return (
    <><h1 className="text-3xl font-bold underline">
      Hello world!
      {/* <div id="overlay-button">bac</div> */}
    </h1>
      <div id="overlay-button" className="bg-blue px-4 py-2" onClick={handleBuy}>Buy</div></>
  )
}

export default App

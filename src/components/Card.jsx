let test = (window.load = async () => {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    const chainId = "cosmoshub-4";

    // Enabling before using the Keplr is recommended.
    // This method will ask the user whether to allow access if they haven't visited this website.
    // Also, it will request that the user unlock the wallet if the wallet is locked.
    await window.keplr.enable(chainId);

    const offlineSigner = window.keplr.getOfflineSigner(chainId);

    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();

    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(
      "https://lcd-cosmoshub.keplr.app",
      accounts[0].address,
      offlineSigner
    );
  }
});

function Card() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className=" bg-green-600/10  shadow-green-700/50 flex backdrop-blur-lg shadow-2xl  flex-col text-center justify-between rounded-lg border border-white/20  h-64 pt-6 pb-6 pr-10 pl-10 w-max">
        <h1 className="font-bold text-white text-4xl">Testing Keplr</h1>
        <p className="italic text-white">Testing Keplr With React+Vite</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="">
          <button
            className="bg-green-400/90 shadow-lg shadow-green-400/50 hover:bg-green-600 text-black font-normal font-mono py-2 px-4 rounded-full"
            onClick={test}
          >
            Detect Keplr
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

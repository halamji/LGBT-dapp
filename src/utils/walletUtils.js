export const connectMetaMask = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      return {
        success: true,
        address: accounts[0],
        provider: 'MetaMask'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  } else {
    return {
      success: false,
      error: 'MetaMask未安装'
    };
  }
};

export const connectWalletConnect = async () => {
  // WalletConnect集成逻辑
  return {
    success: true,
    address: '0x1234...5678',
    provider: 'WalletConnect'
  };
};

export const generateDID = (walletAddress) => {
  return `did:ethr:${walletAddress}`;
};

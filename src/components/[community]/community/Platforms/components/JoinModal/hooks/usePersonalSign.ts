import type { Web3Provider } from "@ethersproject/providers"
import { useWeb3React } from "@web3-react/core"

const usePersonalSign = (): ((message: string) => Promise<string>) => {
  const { library, account } = useWeb3React<Web3Provider>()

  return async (message: string): Promise<string> =>
    library.getSigner(account).signMessage(message)
}

export default usePersonalSign
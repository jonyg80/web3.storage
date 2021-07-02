export const GATEWAY = new URL('https://ipfs.io')

// TODO: Set in Env
const CLUSTER_API_URL = 'https://filecoin.storage.ipfscluster.io/api/'
const CLUSTER_IPFS_PROXY_API_URL = 'https://filecoin.storage.ipfscluster.io/api/v0/'
const CLUSTER_BASIC_AUTH_TOKEN = undefined
const CLUSTER_IPFS_PROXY_BASIC_AUTH_TOKEN = undefined
// const CLUSTER_ADDRS = []

export const cluster = {
  apiUrl: CLUSTER_API_URL,
  basicAuthToken: 
    typeof CLUSTER_BASIC_AUTH_TOKEN !== 'undefined'
      ? CLUSTER_BASIC_AUTH_TOKEN
      : '',
  ipfsProxyApiUrl: CLUSTER_IPFS_PROXY_API_URL,
  ipfsProxyBasicAuthToken: 
    typeof CLUSTER_IPFS_PROXY_BASIC_AUTH_TOKEN !== 'undefined'
      ? CLUSTER_IPFS_PROXY_BASIC_AUTH_TOKEN
      : '',
}

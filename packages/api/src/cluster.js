import { Cluster } from '@nftstorage/ipfs-cluster'
import { cluster } from './constants.js'

const client = new Cluster(cluster.apiUrl, {
  headers: { Authorization: `Basic ${cluster.basicAuthToken}` },
})

/**
 * @param {Blob} data
 * @param {import('@nftstorage/ipfs-cluster').AddParams} options
 */
export async function add(data, options = {}) {
  const { cid, size, bytes } = await client.add(data, {
    metadata: { size: data.size.toString() },
    ...options,
  })
  return {
    cid,
    size: Number(size),
    bytes: Number(bytes),
  }
}

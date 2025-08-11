export function buildEip681({
  chainId,
  to,
  valueWei,
  data,
}: {
  chainId: number;
  to: string; // address
  valueWei?: bigint | string;
  data?: string; // 0x...
}): string {
  const prefix = `ethereum:${to}`; // EIP-681 scheme
  const params: string[] = [];
  params.push(`chainId=${chainId}`);
  if (valueWei !== undefined) {
    params.push(`value=${typeof valueWei === 'bigint' ? valueWei.toString() : valueWei}`);
  }
  if (data) {
    params.push(`data=${data}`);
  }
  return `${prefix}?${params.join('&')}`;
}
export function buildEip681({ chainId, to, valueWei, data, }) {
    const prefix = `ethereum:${to}`; // EIP-681 scheme
    const params = [];
    params.push(`chainId=${chainId}`);
    if (valueWei !== undefined) {
        params.push(`value=${typeof valueWei === 'bigint' ? valueWei.toString() : valueWei}`);
    }
    if (data) {
        params.push(`data=${data}`);
    }
    return `${prefix}?${params.join('&')}`;
}
//# sourceMappingURL=eip681.js.map
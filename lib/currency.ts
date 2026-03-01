// Currency utilities for displaying prices
// Base prices are in LKR, converted to USD for international visitors

const LKR_TO_USD_RATE = 1 / 300; // 1 LKR = ~0.00333 USD (300 LKR = 1 USD)

export function isSriLankan(): boolean {
    if (typeof window === 'undefined') return false;

    // Check timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Asia/Colombo') return true;

    // Check locale
    const locale = navigator.language;
    if (locale.includes('si') || locale.includes('ta')) return true;

    return false;
}

export function formatPrice(lkrAmount: number): { amount: string; currency: string; fullText: string } {
    const isSL = isSriLankan();

    if (isSL) {
        // Show LKR for Sri Lankan visitors
        return {
            amount: lkrAmount.toLocaleString('en-LK'),
            currency: 'LKR',
            fullText: `LKR ${lkrAmount.toLocaleString('en-LK')}`
        };
    } else {
        // Convert to USD for international visitors
        const usdAmount = Math.round(lkrAmount * LKR_TO_USD_RATE);
        return {
            amount: usdAmount.toLocaleString('en-US'),
            currency: 'USD',
            fullText: `$${usdAmount.toLocaleString('en-US')}`
        };
    }
}

export function formatPriceWithBoth(lkrAmount: number): string {
    const isSL = isSriLankan();
    const usdAmount = Math.round(lkrAmount * LKR_TO_USD_RATE);

    if (isSL) {
        return `LKR ${lkrAmount.toLocaleString('en-LK')} (~$${usdAmount.toLocaleString('en-US')})`;
    } else {
        return `$${usdAmount.toLocaleString('en-US')}`;
    }
}

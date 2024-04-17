export const formatRupiah = (price) => {
    return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "USD",
    });
};
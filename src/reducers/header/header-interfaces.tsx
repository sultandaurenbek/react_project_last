export interface ICartProps {
    totalPrice: number;
    cartItemsCount: number;
}

export interface IHeaderStateProps {
    cart: ICartProps;
}

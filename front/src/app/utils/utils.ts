import { of } from "rxjs";

export const handleError = (errorValue: any) => {
    return of(errorValue);
};

export const deleteItemFromArray = (array: Array<any>, item: any) => {
    let itemIndex = array.indexOf(item);
    array.splice(itemIndex, 1);
}

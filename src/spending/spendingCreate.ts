import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpendingStorageDTO } from "./SpendingStorageDTO";
import { SPENDING_COLLECTION } from "../storage/storageConfig";


export async function spendingCreate(newSpending: SpendingStorageDTO ) {
    try{
        await AsyncStorage.setItem(SPENDING_COLLECTION, JSON.stringify(newSpending))
    }catch(error){
        console.log('Não foi possivel fazer a gravação')
        throw error;
    }
}
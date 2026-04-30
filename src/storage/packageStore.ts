import AsyncStorage from "@react-native-async-storage/async-storage"
import { Package } from "../services/packageModel/packageModel"

const PACKAGE_STORAGE_KEY = "packages-storage"

async function getPackage(): Promise<Package[]> {
  const storage = await AsyncStorage.getItem(PACKAGE_STORAGE_KEY)
  const response = storage ? JSON.parse(storage) : []

  return response
}

async function savePackage(newPackage: Package) {
  try {
    const storage = await getPackage()
    const updated = JSON.stringify([...storage, newPackage])
    await AsyncStorage.setItem(PACKAGE_STORAGE_KEY, updated)

  } catch (error) {
    throw error
  }
}

export const packageStorage = { getPackage, savePackage }
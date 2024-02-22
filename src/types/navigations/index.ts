import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type MainStackScreenProps<T extends keyof MainTabNavigation> = BottomTabScreenProps<MainTabNavigation, T>
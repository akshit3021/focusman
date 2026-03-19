import { Tabs } from "expo-router";
import {
  HouseIcon,
  MusicNoteIcon,
  NoteIcon,
  TrendUpIcon,
} from "phosphor-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#f5f5f5",
          marginHorizontal: 19,
          height: 80,
          position: "absolute",
          bottom: 40,
          backgroundColor: "white",
          shadowColor: "#1a1a1a",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
        tabBarItemStyle: {
          paddingTop: 11,
        },
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#737373",

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HouseIcon size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: "Notes",
          tabBarIcon: ({ color, size }) => <NoteIcon size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: "Music",
          tabBarIcon: ({ color, size }) => (
            <MusicNoteIcon size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color, size }) => (
            <TrendUpIcon size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

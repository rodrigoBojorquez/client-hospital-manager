import { NavigationContainer } from '@react-navigation/native';
import { useAppStore } from './src/stores/appStore';

// STACKS AND TABS
import PatientTabs from './src/tabs/PatientTabs';
import DoctorTabs from './src/tabs/DoctorTabs';
import DevTabs from './src/tabs/DevTabs';
import AuthStack from './src/stacks/AuthStack';

const roleBasedTabs = {
  patient: PatientTabs,
  doctor: DoctorTabs,
  developer: DevTabs
}

export default function App() {

  const profileData = useAppStore(state => state.profileData);

  const NavigationComponent = profileData.auth ? roleBasedTabs[profileData.role] : AuthStack

  return (
    <NavigationContainer>
      <NavigationComponent />      
    </NavigationContainer>
  );
}
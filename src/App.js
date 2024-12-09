import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner, Group, useAdaptivityConditionalRender } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Persik, Home, NewPanel } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';


export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState();
  const { viewWidth } = useAdaptivityConditionalRender();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);


  return (
    <SplitLayout popout={popout}>
      <SplitCol autoSpaced>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
          <Persik id="persik" />
          <NewPanel id="newpanel" />
        </View>
        <Group>
        </Group>
      </SplitCol>
    </SplitLayout>
  );
};

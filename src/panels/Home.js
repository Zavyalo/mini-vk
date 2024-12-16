import { Panel, PanelHeader, Header, Button, Group,  Div, Avatar, Link, DisplayTitle, Card, CardGrid, PanelHeaderClose} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';

export const Home = () => {
const routeNavigator = useRouteNavigator();

return (
  <Panel id="panel1">
  <PanelHeader before={<PanelHeaderClose />}>Анонс</PanelHeader>

<Div>
<DisplayTitle level="1" style={{ marginBottom: 16, marginTop: 5}}>
Афиша театральных событий Челябинска
</DisplayTitle>
</Div>

      <Group>
        <Div>
      <Group mode="plain" header={<Header size="s">Балет "Щелкунчик"</Header>}>
        <CardGrid size="l">
          <Card>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
        <Div><Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('newpanel')}>
            Оставить озыв о мероприятии
          </Button></Div>
      </Group>

      <Group mode="plain" header={<Header size="s">Опера "Евгений Онегин"</Header>}>
        <CardGrid size="l">
          <Card>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
        <Div><Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('newpanel')}>
            Оставить озыв о мероприятии
          </Button></Div>
      </Group>

      <Group mode="plain" header={<Header size="s">Спектакль "Дон Жуан"</Header>}>
        <CardGrid size="l">
          <Card>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
        <Div><Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('newpanel')}>
            Оставить озыв о мероприятии
          </Button></Div>
      </Group>
          <Div>
          <Button stretched size="l" mode="primary" onClick={() => routeNavigator.push('persik')}>
            Добавить мероприятие
          </Button>
          </Div>
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

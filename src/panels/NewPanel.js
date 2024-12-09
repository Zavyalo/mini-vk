import { Group, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import PersikImage from '../assets/persik.png';
import {Icon32StarsCircleFillViolet} from '@vkontakte/icons'

export const NewPanel = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Новая панель
      </PanelHeader>
      <Group> <Icon32StarsCircleFillViolet /> </Group>
    </Panel>
  );
};

NewPanel.propTypes = {
  id: PropTypes.string.isRequired,
};

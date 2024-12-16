import { Group, Panel, PanelHeader, PanelHeaderBack, FormItem, Button, Slider, Input } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import { useState } from 'react';

const options = () => {
  let options = [];
  for (let i = 0; i <= 10; i += 2) {
    options.push({ value: `${i / 10}`, label: `${i / 10}` });
  }
  return options;
};


export const Persik = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const [valueBasic, setValueBasic] = useState(24.4234);
  const [valueWithTooltipBasic, setValueWithTooltipBasic] = useState(24.4234);
  const [valueDisabled, setValueDisabled] = useState(15);
  const [valueStep, setValueStep] = useState(0.2);

  

  return (
    <Panel id={id}>

    <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
      Добавить мероприятие
    </PanelHeader>
    <FormItem top="Название мероприятия" htmlFor="name">
    <Input id="name" type="text" placeholder="Студенческий спектакль" />
    </FormItem>
    <FormItem top="Адрес мероприятия" htmlFor="name">
    <Input id="name" type="text" placeholder="Город, улица, дом" />
    </FormItem>
    <FormItem top="Время мероприятия" htmlFor="name">
    <Input id="name" type="text" placeholder="19.00" />
    </FormItem>

    <FormItem top={<span id="basic">Цена билета</span>}>
            <Slider value={Number(valueBasic)} aria-labelledby="basic" onChange={setValueBasic} />
          </FormItem>
          <FormItem>
            <Input
              type="number"
              value={String(valueBasic)}
              onChange={(e) => setValueBasic(e.target.value)}
            />
    </FormItem>

    <FormItem>
            <Button type="submit" size="l" stretched>
              Добавить мероприятие
            </Button>
    </FormItem>
  </Panel>
  );
};

Persik.propTypes = {
  id: PropTypes.string.isRequired,
};

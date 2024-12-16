import { Panel, PanelHeader, PanelHeaderBack, WriteBar, WriteBarIcon, AdaptiveIconRenderer, usePlatform } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import React from 'react';
import { Icon28SmileOutline, Icon28VoiceOutline, Icon24SmileOutline, Icon24VoiceOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';


export const NewPanel = ({id}) => {
  const routeNavigator = useRouteNavigator();

  const attachmentsCount = 5;
  const fixedLayoutInnerElRef = useRef(null);
  const [bottomPadding, setBottomPadding] = React.useState(0);
  const [isAttachmentsShown, setIsAttachmentsShown] = React.useState(false);
  const [text, setText] = React.useState('');
  const platform = usePlatform();

  const SmileOutlineIcon = (
    <AdaptiveIconRenderer
      IconCompact={platform === 'ios' ? Icon28SmileOutline : Icon24SmileOutline}
      IconRegular={Icon28SmileOutline}
    />
  );
  const VoiceOutlineIcon = (
    <AdaptiveIconRenderer
      IconCompact={platform === 'ios' ? Icon28VoiceOutline : Icon24VoiceOutline}
      IconRegular={Icon28VoiceOutline}
    />
  );
  const updateBottomPadding = () => {
    const el = fixedLayoutInnerElRef.current;
    if (el) {
      const height = el.offsetHeight;
      if (height !== bottomPadding) {
        setBottomPadding(height);
      }
    }
  };

  React.useEffect(() => {
    updateBottomPadding();
  }, [isAttachmentsShown]);

  return (
 <Panel id="writebar">
  <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
      Оставьте отзыв о мероприятии
  </PanelHeader>
 <WriteBar
              before={
                <WriteBarIcon
                  mode="attach"
                  onClick={() => setIsAttachmentsShown(!isAttachmentsShown)}
                  count={isAttachmentsShown ? null : attachmentsCount}
                />
              }
              inlineAfter={
                text.length > 0 && (
                  <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                    {SmileOutlineIcon}
                  </WriteBarIcon>
                )
              }
              after={
                <>
                  {text.length === 0 && (
                    <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                      {SmileOutlineIcon}
                    </WriteBarIcon>
                  )}
                  {text.length === 0 && (
                    <WriteBarIcon onClick={noop} label="Записать голосовое сообщение">
                      {VoiceOutlineIcon}
                    </WriteBarIcon>
                  )}
                  {text.length > 0 && <WriteBarIcon onClick={noop} mode="send" />}
                </>
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
              onHeightChange={() => updateBottomPadding()}
              placeholder="Сообщение"
            />
    </Panel>
  );
};

NewPanel.propTypes = {
  id: PropTypes.string.isRequired,
};

import { Cell, Card, Divider } from 'react-vant';
import { Link } from 'react-router-dom';
// import { Replay }  from "@react-vant/icons";
import { Space, Badge, Switch } from 'react-vant';
import { useLocalStorage } from '@uidotdev/usehooks';

import Title from '../router/DomTitle';

export default () => {
  Title('设置');
  return (
    <div className="settings-panel">
      <Card round>
        <Cell.Group>
          <Cell title="学习记录" />
          <Cell title="云同步" />
          <Cell title="云服务隐私政策" />
          <Cell title="上报调试信息" value={<Switch size="1em" />} />
        </Cell.Group>
      </Card>
      <Divider />
      <Card round>
        <Cell.Group>
          <Link
            target="_blank"
            to="https://github.com/TennousuAthena/project-m"
          >
            <Cell title="开源许可" />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/TennousuAthena/project-m/issues"
          >
            <Cell title="功能建议" />
          </Link>
          <Link
            target="_blank"
            to="https://matrix.to/#/!ALuGKuaRUlsvvmAgsr:matrix.org?via=matrix.org"
          >
            <Cell title="交流讨论" />
          </Link>
          <Cell
            title="检查更新"
            value={
              <>
                v1.0 <Badge dot style={{ opacity: '0%' }}></Badge>
              </>
            }
          />
          <Link target="_blank" to="https://project-m.pages.dev/">
            <Cell title="永久地址" label="project-m.pages.dev" />
          </Link>
          <Cell title="关于" label="Project M" />
        </Cell.Group>
      </Card>
    </div>
  );
};

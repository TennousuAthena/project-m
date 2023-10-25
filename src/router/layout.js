import { HomeO, Search, SettingO, NotesO } from '@react-vant/icons';
import { Toast, NavBar } from 'react-vant';
import { Tabbar } from 'react-vant';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Layout(props) {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar
        className="navbar"
        title="Project M"
        leftText="返回"
        rightText={<HomeO fontSize={20} />}
        onClickLeft={() => navigate(-1)}
        onClickRight={() => navigate('/')}
      />
      <Tabbar>
        <Tabbar.Item icon={<HomeO />} onClick={() => navigate('/')}>
          首页
        </Tabbar.Item>
        <Tabbar.Item icon={<Search />} onClick={() => navigate('/search')}>
          搜题
        </Tabbar.Item>
        <Tabbar.Item icon={<NotesO />} onClick={() => Toast('敬请期待')}>
          错题本
        </Tabbar.Item>
        <Tabbar.Item icon={<SettingO />} onClick={() => navigate('/settings')}>
          设置
        </Tabbar.Item>
      </Tabbar>
    </div>
  );
}

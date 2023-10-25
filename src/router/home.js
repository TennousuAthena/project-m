import { Arrow, GuideO, Exchange, TodoListO } from '@react-vant/icons';
import {
  Card,
  Image,
  Button,
  Toast,
  Space,
  Typography,
  Tag,
  Divider,
} from 'react-vant';
import { useNavigate } from 'react-router-dom';

import Title from './DomTitle';

export default function Home() {
  Title('Project M');

  return (
    <div>
      <Typography.Title level={1}>
        Project M <Tag type="primary">v1</Tag>
      </Typography.Title>
      <Typography.Text>马原毛概在线练习平台</Typography.Text>
      <Divider />
      <Card round>
        <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
          <Image src="/assets/images/marxism.jpg" alt="马原" />
        </Card.Cover>
        <Card.Header extra={<Arrow />}>马克思主义基本原理</Card.Header>
        <Card.Body onClick={() => Toast.info('点击了Body区域')}>
          马克思主义基本原理主要包括马克思主义哲学、马克思主义政治经济学、科学社会主义，是科学的世界观和方法论，是对马克思主义立场、观点和方法的集中概括，是马克思主义长期形成、发展以及运用过程中经过实践检验并确立起来的具有普遍真理性的理论。无论时代如何变迁，马克思主义基本原理的科学性和真理性都历久弥新。
        </Card.Body>
        <Card.Footer>
          <ButtonGroup subject="马原" />
        </Card.Footer>
      </Card>

      <Divider />

      <Card round>
        <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
          <Image src="/assets/images/maoism.jpg" alt="毛概" />
        </Card.Cover>
        <Card.Header extra={<Arrow />}>
          毛泽东思想和中国特色社会主义理论体系概论
        </Card.Header>
        <Card.Body onClick={() => Toast.info('点击了Body区域')}>
          《毛泽东思想和中国特色社会主义理论体系概论》是根据新时期大学生的需要，旨在对我国高等学校的学生进行中国化马克思主义理论教育的一门公共基础必修课程。
        </Card.Body>
        <Card.Footer>
          <ButtonGroup subject="毛概" />
        </Card.Footer>
      </Card>

      <Divider />
    </div>
  );
}

function ButtonGroup(props) {
  const navigate = useNavigate();
  return (
    <Space className="button-group">
      {/* <Button round size="small">更多</Button> */}
      <Button
        icon={<GuideO />}
        round
        color="linear-gradient(to right, rgb(54, 209, 220), rgb(91, 134, 229))"
        size="small"
        onClick={() => navigate(`${props.subject}/顺序/0`)}
      >
        顺序练习
      </Button>
      <Button
        icon={<Exchange />}
        round
        color="linear-gradient(to right, rgb(178, 69, 146), rgb(241, 95, 121))"
        size="small"
        onClick={() => navigate(`${props.subject}/随机/0`)}
      >
        随机练习
      </Button>
      <Button
        icon={<TodoListO />}
        round
        color="linear-gradient(to right, rgb(229, 57, 53), rgb(227, 93, 91))"
        size="small"
        onClick={() => Toast.info(props.subject + '模拟测试功能 即将完成')}
      >
        模拟测试
      </Button>
    </Space>
  );
}

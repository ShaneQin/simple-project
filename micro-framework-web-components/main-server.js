import express from 'express';
import path from 'path';
import morgan from 'morgan';
import config from './config.js';

const app = express();
const { port, host } = config;

app.use(morgan('dev'));

app.use(express.static(path.join('public', 'main')));

app.post('/microapps', function (req, res) {
  // 这里可以是管理后台新增菜单后存储到数据库的数据
  // 从而可以通过管理后台动态配置微应用的菜单
  res.json([
    {
      // 应用名称
      name: 'micro1',
      // 应用标识
      id: 'micro1',
      // Web Components 方案
      // 自定义元素名称
      customElement: 'micro-app-1',
      // 应用脚本（示例给出一个脚本，多个脚本也一样）
      script: `http://${host}:${port.micro}/micro1.js`,
      // 应用样式
      style: `http://${host}:${port.micro}/micro1.css`,
      // 是否需要预获取
      prefetch: true
    },
    {
      name: 'micro2',
      id: 'micro2',
      customElement: 'micro-app-2',
      script: `http://${host}:${port.micro}/micro2.js`,
      style: `http://${host}:${port.micro}/micro2.css`,
      prefetch: true
    }
  ]);
});

// 启动 Node 服务
app.listen(port.main, host);
console.log(`server start at http://${host}:${port.main}/`);
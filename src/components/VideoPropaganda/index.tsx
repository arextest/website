import React from "react"
import Collapse from 'rc-collapse'
import motion from "@site/src/components/VideoPropaganda/motion";
import Translate from "@docusaurus/Translate";
const Panel = Collapse.Panel
const VideoPropaganda = () => {
  return <div className={'VideoPropaganda'} style={{}}>

      <div style={{margin:'0 auto',width:'1200px',display:'flex',paddingTop:'50px'}}>
          <div style={{marginRight:'60px'}}>
              <h1 style={{marginBottom:'40px'}}>
                  <Translate>产品特性</Translate>
              </h1>
              <Collapse accordion={true} openMotion={motion} style={{width:'480px'}} defaultActiveKey={'0'}>
                  <Panel header="解决线上问题难复现" headerClass="my-header-class">
                      <Translate>
                          线上问题可在本地测试、开发环境快速调试
                      </Translate>
                  </Panel>
                  <Panel header="消除环境差异">
                      <Translate>强大的 Mock 机制，支持 Mock 时间、缓存数据</Translate>
                  </Panel>
                  <Panel header="Mock 数据可编辑" headerClass="my-header-class">
                      <Translate>满足多种测试需求</Translate>
                  </Panel>
                  <Panel header="降低回放噪声" headerClass="my-header-class">
                      <Translate>支持全局级别、接口级别的节点忽略配置，支持数组乱序对比</Translate>
                  </Panel>
                  <Panel header="智能回放报告">
                      <Translate>按照 Json 报文路径，高度聚合差异点，提高排查效率；包含所有差异场景，不遗漏任何风险点</Translate>
                  </Panel>
              </Collapse>
          </div>

          <iframe
              src="//player.bilibili.com/player.html?aid=268170075&bvid=BV1ZY41167Bz&cid=1045701367&page=1&high_quality=1&danmaku=0"
              width="700" height="500" scrolling="no" frameBorder="0"
              sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
      </div>
  </div>
}

export default VideoPropaganda

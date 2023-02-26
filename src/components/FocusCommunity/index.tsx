import React from "react"
import Translate,{translate} from "@docusaurus/Translate";
const FocusCommunity = () => {
    const isZhHans = translate({message:'__language__'}) === 'zh-Hans'
    console.log(translate({message:'__language__'}))
    const s = [{
        lang:'en',
        title:'Twitter',
        content:<div>Follow us on <a href="https://twitter.com/AREX_Test" target={'_blank'}>Twitter</a></div>
    },{
        lang:'en',
        title:'Slack',
        content:<div>Our Community Groupsare great for quick questions or discussions on specialized topics. <a href="https://join.slack.com/t/arexcommunity/shared_invite/zt-1pb0qukhd-tnLVZN3aisHfIo5SzBjj0Q" target={'_blank'}>Join AREX Slack！</a></div>
    },{
        lang:'en',
        title:'GitHub',
        content:<div><a href="https://github.com/arextest/arex-report/issues/new" target={'_blank'}>Submit a Bug or Suggestion</a></div>
    },

        {
            lang:'zh-Hans',
            title:'微信公众号',
            content:<div>欢迎关注 AREX 微信公众号（AREX Test），了解  AREX 最新动态！</div>
        },{
            lang:'zh-Hans',
            title:'QQ 群',
            content:<div>加入官方QQ交流群：656108079，AREX 维护者们将积极为你答疑解惑。</div>
        },{
            lang:'zh-Hans',
            title:'GitHub',
            content:<div><a href="https://github.com/arextest/arex-report/issues/new" target={'_blank'}>提交 Bug 或建议</a></div>
        }]

  return <div style={{textAlign:'center',padding:'0 100px'}}>
      <h1>
          <Translate>Join Community</Translate>
          </h1>
      <p>
          <Translate>
              Ask questions about the documentation and project
          </Translate>
      </p>

      <div style={{display:'flex',justifyContent:'space-around'}}>
          {
              s.filter(i=>i.lang === (isZhHans?'zh-Hans':'en')).map(i=>{
                  return <div style={{width:'20vw'}}>
                      <p style={{fontWeight:'bold'}}>{i.title}</p>
                      <p style={{textAlign:'left'}}>{i.content}</p>
                  </div>
              })
          }
      </div>
  </div>
}

export default FocusCommunity

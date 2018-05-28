import React, {Component} from 'react';
import * as pbi from 'powerbi-client';

export default class Report extends Component {
  state = {
    accessToken:
      'H4sIAAAAAAAEACWWxa7FCnJF_-VNHclMkXpgZsbjmZmZHeXfc9M935Nau7Sq_ucfO32HOS3--e9_DufirVPiOIF8TbGWRkNxbouRNjSKs_zzocjLm8Isd5SCLlE6ffGDEq6KvFMDMXB-11cCqME66GmLQRWCmWyggnVh-G86CnmaEnZq0DOBOEsRO6sEfesUULcMRHLdJP72eQ9BNHEjcS63h2Rw511n7WrMY9-EC7h9Ac0lON1hdiiuy0X2JSXLavjEY7YbZxcCnVJaAGE6i0o7uSir4BtE9F5kqO7Bds-Ge0dcttYW-uoUoG9stlqIC_zzh3X5vqLN-ybmWL9YhohMJFQv5ofVajcYS6wgKyZZT9CB7lBi4uQqaayWKZTwzFfw_RL3Ehik0JerYFspOwMTJk6NKk_BFphrSjxF4rsVhq4r1MqbkK2d_P5HsUNW3_MA2MarcesMaLteiIxBqeFzqrj62RCrJw1FfabUaHgs2x9iMlVwmOG6iy7U0GSm0-C39R5NDS89hiChqkQvE9PkQOUTlCI6eLgzm9wQ9BKo0tz5rmKHMLS5qApDkZ-88FFhS1NSiI8SUl8UHbD7a6kPHm3drYD4CtnbC7dvEIWGn_lvQGXOck1jVyAq9cf1bVqi33kKyPJt5dvih5KxT-_u0aOhNUV3ELcjEpQgs5LUXESYW2xwF8gW6-Twl6mymdga_RllPTpI-27VO69TsQIMOkvuT1J10TPXywQEehWxKyew-mvYyDWejdBKAbDYGKoNLuxCjuajbLVJLlvIiK-75jCqcPr5b-BRSC0TnESOhKy48I3FX3-H64AjSF9LjMEHgt62VyZgyr4rZLzFlHKMFYIEz4fpyB17Q0HIOg95zZuV7kVU18IyJ002KzJ5M5YEYFAR-PKjbROTXii1HFKxEtbEc017g02WGMDkn43v0YMosC5xMNwOFAbwxDjtxNUSSmy1vZLlfNXF1BU2PWByGhjt3z68oZ6YAZGeSKYFTs-sOdWpO6XudG73gtRo059MbnotUhwiZ_cwqNb1IYKMvs5ZyO2VvmPlL2rg43yqvHjzwNziitnNzdrb_QxooYRSI93WnfM0rqJnclz-XVNiRoDImfKDWzL34RgJzWzpmb729ab5uPjcfVYpAB1D8KpQ8eTtIVB44Whld5PsjV6zy1qnftCUS4vSABHTQZ33hnydbuyF5DO33ECKj8RF8sMpN2aKM1CR8aYgUAkgUVwjD2-5hx3V6eyWJxRH0uLhy9uqmiHJdFXrk-GLE7xPaG8gTAt0Z7p475DEoBC0HzzW3QEyLWIPAZO-IC1QUmyR3vou1ccLnYFcOkL-ssyuqtOCYBlGRtgKaIkxEx_6njupo86Pxxp0W3AFzDPAMWnMUkVhJ2CzGBhVv1wlmj4bhoAUVPW486MffTVizEOd-LyD7uQ--khXRpDDoFES1cZLU_K97fPM7XJzPcJ4XWtuSZA2quNWb-_nbC17O3nmssbNlpvc9RYA9Ig-LWdBrJ2xpP2NvOUMulAqtRtmm8AnOWrp3lmayY6drGRn6naTuM8S0uQwtzqv0Vv8VntJcs_E1BkHyDBeor_i8etCfADEVmbzXjjBzrQNAWyxiPtBmHZ9FiYrULKjZl76yTiGuIT8Sn0wCjCRcblhOsfUxxsL5xnbaeYKrimb3uLnGtl1DDgRcQ3-zVz5czPP53-FibRNlKSx-UWgCyMZxjuoDaIYmUvq6sJGxvhp_xrlT8Ml0CQe-tIOmjsyx1hILMrc8diwiTSTsuSN0E0HDZAz6_G3CYtwpm2AOTi8oz9WxD8I96YZYqEvrB8S4PVttQUN4NMGa3qg66EOk6j8oEU93E4XH58GFTVb7lNedQ5Qx_d5Y0ZOXIjUgtbxvosZXesUWqAkxIPBDOyuIWc3w8i-yTZH2R_kuFK2ImcrL27s3F2p3n02YOn3I4T06buwWFRYCNpoUSRdpsIEb14o21Y-mrAgGXdePbXAB3iljEIVlTYe1lKc6FdwVwK9NEJad8Mg1BnY7t8mKJBVPxg5wq9XqvaJs4Icg5w1GT5PnQLrx3PkvYbpLg51UTEReuo5VbQmsY01Z5KhUJxPFXuldlbyB4x6zEBCVBe01EXhCwGcHa2966iO6FPmoSj1pEOXnH_965__-ofb3uWYtfL9exOqSWmgTNXWU7PDMYdVaHSBlNAZ3XbCH_IaesCQiH5GP-Bdb1hkAe5Oi_ntzgRYhdqkk2cPL05qI3NjSoQ1Co0yH8epypJ-1mMmFUMknp09ncx-msvL6tNG505OEUjy844v0LCxWM5jmxjF5-28vWQe8NEGz-LW9uPhcdb0ey-ypoFvg6hnWRCaKWRMb2sJCquQAev3ieoVY0Ce0C94qRAoMKkOvvFeA772LqGBgpzIfaOaUN8iy8zRBGlS0RSLMMwBFLRfmSFZhpReCKOzyUE_QpqWH7dub2ulumZ0OAkzPyWND23FmGALo5zaJ7EZDu_DNH-nyLOGM5obK_Hn6ipF9_4P5vdPE5sS_lF26H4Gee1PE3gq8Mv3dhTH1P9OeW09pce5lX-xUpzPSwlzjaIhxViJWcwllJxnjW3Dbbc4Cy4Ymf9pSSLw3zb2qv64hIthdRWO1VxbIha_cY3Yy1M10_oAiiXAolQ43af-fpU3ejH41fCq1xjxZ0tzgJnpYEQRQe1CS0CzAAaNpSngHdyoBl46cgQkLJnxSJafHjl0bheXWDg025WJY2vuFX5X9elm2CaCWlz8-lBAmXGQuhoQbEMVK4Pt8tNoeO5SIXU20VDme6i4t-VbYpuUieTg7KFelAMlHFtaa9GLjfBb8Gi687590KpdWzG9NG5ohkaxAnzvr3i177q9YgIdopIhX9Cah-hR_VB5aGSMGv8BPlZYv-RUTPkNwuD_y_jf_wMbTRj5GgsAAA==',
    embedUrl:
      'https://app.powerbi.com/reportEmbed?reportId=b4cac543-65c3-4a1a-b0dd-dc47f8acefd9&groupId=be8908da-da25-452e-b220-163f52476cdd',
    reportId: 'b4cac543-65c3-4a1a-b0dd-dc47f8acefd9',
    tokenType: 'Embed token',
    models: window['powerbi-client'].models,
    permissions: models.Permissions.All,
    config: {
      type: 'report',
      tokenType:
        tokenType == '0' ? models.TokenType.Aad : models.TokenType.Embed,
      accessToken: this.state.accessToken,
      embedUrl: this.state.embedUrl,
      id: this.state.reportId,
      permissions: this.state.permissions,
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true,
      },
    },
  };

  render() {
    return <h1>Embed</h1>;
    let embedContainer = document.getElementById('#embedContainer');
    let report = powerbi.embed(embedContainer, this.state.config);
    report.off('loaded');
    report.on('loaded', () => {
      Log.logText('Loaded');
    });
  }
}
// const Report = props => {
//   return (
//     <script>
//       let accessToken = {props.accessToken}; let embedUrl = {props.embedUrl};
//       let reportId = {props.reportId}; let tokenType = 'Embed token'; let mdoels
//       = window['powerbi-client'].models;
//       let permissions = models.Permissions.All;

//       let config = {
//         type: 'report',
//         tokenType: tokenType == '0' ? models.TokenType.Aad : models.TokenType.Embed,
//           accessToken: accessToken,
//           embedUrl: embedUrl,
//           id: embedId,
//           permissions: permissions,
//           settings: {
//             filterPaneEnabled: true,
//             navContentPaneEnabled: true
//           }
//       };

//       let embedContainer = document.getElementById('embedContainer');
//       let report = powerbi.embed(embedContainer, config);
//     </script>
//   );
// };

// export default Report;

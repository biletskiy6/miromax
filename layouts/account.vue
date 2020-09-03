<template>
  <div class="account">
    <AppHeader type="account"/>

    <div class="account-wrapper">
      <div class="account-left">
        <div class="account-top">
          <div class="account-image">
            <img src="https://i.pinimg.com/originals/2b/f1/ff/2bf1ff102e2ccc9da4adf78cfa1d6005.jpg" alt="">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path class="a" d="M0,0H24V24H0Z"/>
                <path class="b"
                      d="M20,4H16.83L15,2H9L7.17,4H4A2.006,2.006,0,0,0,2,6V18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,14H4V6H8.05L9.88,4h4.24l1.83,2H20Z"/>
                <path class="b" d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3.009,3.009,0,0,1,12,15Z"/>
              </svg>
            </button>
          </div>

          <p class="account-name">Ярослав</p>

          <div class="account-amount">
            <ul>
              <li>
                <svg class="account-nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24">
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b"
                        d="M21,18v1a2.006,2.006,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19a2.006,2.006,0,0,1,2,2V6H12a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2Zm-9-2H22V8H12Zm4-2.5A1.5,1.5,0,1,1,17.5,12,1.5,1.5,0,0,1,16,13.5Z"/>
                </svg>
                <span>120 грн</span>
              </li>
              <li>
                <svg class="account-nav-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24">
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b"
                        d="M14,5a2.006,2.006,0,0,0-2-2H11V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H4A2.006,2.006,0,0,0,2,5V20a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2h8V5Zm6,13H12v2H4V5H7V3H9V5h3V7h8Z"/>
                  <rect class="b" width="2" height="2" transform="translate(9 15)"/>
                  <rect class="b" width="2" height="2" transform="translate(9 8)"/>
                  <rect class="b" width="2" height="2" transform="translate(13 15)"/>
                  <rect class="b" width="2" height="2" transform="translate(13 8)"/>
                  <rect class="b" width="2" height="2" transform="translate(17 15)"/>
                  <rect class="b" width="2" height="2" transform="translate(17 8)"/>
                </svg>
                <span>12 фільмів</span>
              </li>
            </ul>
          </div>

        </div>
        <nav class="account-nav">
          <h4>Розділи:</h4>
          <ul>
            <li :key="link.url" v-for="(link, index) in links">
              <nuxt-link :exact="link.exact" :to="link.url">
                <span v-html="navIcons[index]"></span>
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="account-logout">

        </div>

      </div>
      <div class="account-right">
        <div class="account-info">
          <h5 class="account-info-header">Мій особистий кабінет</h5>

          <nuxt/>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet architecto aut commodi corporis
            cupiditate, debitis eligendi facilis fugit id illo in itaque laborum minus molestiae molestias natus odio
            odit officia perspiciatis porro provident quidem quis quos reprehenderit sequi tempore, totam unde vero.
            Commodi, facilis, odio. Accusantium beatae blanditiis commodi culpa distinctio, ducimus eum, maxime modi
            rerum sed sint, tenetur vitae voluptas. A, mollitia qui. Amet autem deserunt ducimus, enim esse illum
            nesciunt odit placeat quasi quia quos recusandae, veniam! Earum excepturi id molestias pariatur qui repellat
            sed sequi. Accusantium consectetur dolore dolorum error exercitationem explicabo fuga harum, impedit ipsa
            laboriosam maiores mollitia non obcaecati placeat praesentium provident quibusdam quidem repellendus
            repudiandae similique sunt suscipit temporibus unde! Autem cupiditate eaque eligendi molestiae nisi odio
            omnis sequi ullam! Ab aspernatur aut consectetur consequuntur cum cumque deleniti deserunt doloremque error
            est exercitationem facilis fugit inventore ipsa, ipsam ipsum iure laudantium libero magnam maiores molestiae
            natus nobis odio odit optio perspiciatis ratione, recusandae reprehenderit saepe sequi similique vel veniam
            voluptas. Ab ad alias aliquam architecto at, corporis cumque cupiditate debitis dicta dolores eligendi est
            eum excepturi facilis harum, id illo ipsa iure labore molestias neque, nisi nobis officia porro quaerat
            quidem quis quos ratione reiciendis sapiente sequi sint sit tempora tenetur ullam vel veritatis. Accusamus
            beatae debitis dolores dolorum est excepturi facilis fugit in, labore magni, molestiae mollitia nisi officia
            recusandae similique velit veniam! Ab adipisci culpa cum debitis distinctio, dolore doloribus dolorum
            explicabo facere facilis inventore iste laboriosam laborum laudantium magnam maiores molestiae nemo nesciunt
            nihil porro possimus praesentium quam quibusdam recusandae reiciendis rem repellendus sapiente sequi sit
            temporibus veniam veritatis vero voluptates? In laborum nostrum porro quidem quis. Commodi doloribus ducimus
            eius hic ipsa ipsam magnam magni nobis nostrum, omnis, quis quod ratione sint soluta suscipit unde
            veritatis. Blanditiis, culpa deleniti dignissimos, ducimus enim eum eveniet itaque, nam odit possimus
            voluptatem voluptatibus. Ab aliquam autem commodi corporis deserunt dicta dolorum et eveniet inventore ipsam
            libero magnam, magni maiores non, nulla quaerat quas recusandae reiciendis rem repellat sunt ullam voluptas
            voluptate, voluptatem voluptatum? Corporis eveniet harum ipsum nesciunt pariatur similique sint tempora
            temporibus veniam, voluptate! Amet assumenda, at consequuntur ea eligendi esse eum ex iste necessitatibus
            nesciunt nobis nostrum numquam provident quia quis reiciendis sed sequi tempore ullam vero! Assumenda
            cupiditate, ut! A ad aliquid atque blanditiis cum delectus doloremque eaque eius eveniet ex facere fuga
            fugiat, id laborum magnam maxime modi natus nemo nesciunt odit omnis possimus quo repellendus reprehenderit
            rerum sapiente sequi similique temporibus vitae voluptate? Accusantium aliquam animi aperiam aut cum
            cupiditate dolore doloremque esse ex illum incidunt ipsam itaque magnam modi mollitia possimus quae quo
            repellendus, sed sit suscipit tenetur vero vitae. Asperiores, aspernatur assumenda deleniti dolore
            doloremque dolores eveniet facere harum, hic ipsa ipsam magnam minus necessitatibus neque nihil officia
            quasi, sequi velit! Amet aperiam autem debitis delectus, deleniti dicta dignissimos dolor eius esse,
            excepturi fugiat fugit id illum incidunt ipsa iusto modi nisi non odio officiis pariatur quam ratione rem
            repellat repudiandae saepe sint tempora tempore totam ullam veniam veritatis voluptates voluptatibus!
            Aliquid autem, cum doloribus error impedit laudantium minus nesciunt numquam porro, quaerat qui quibusdam
            repudiandae rerum similique suscipit, tempora veritatis. A animi beatae, esse ipsa ipsam necessitatibus
            neque perferendis quasi quia recusandae sequi tempora ullam voluptatibus! Accusamus amet id illo temporibus?
            Asperiores, commodi consequatur consequuntur cumque fugit id mollitia provident qui sunt voluptatum! Ad at
            dignissimos eligendi, laboriosam minus neque quam veniam vero. Ad asperiores atque beatae deleniti ducimus
            earum eveniet, excepturi exercitationem harum illum iusto, optio quasi qui quis quos reiciendis rem saepe,
            sint suscipit unde velit vero vitae. Consequatur dignissimos ex fuga impedit nemo omnis placeat praesentium
            quo repellendus sunt! A ab aperiam assumenda cumque earum eos esse eum ex hic, id illum labore libero
            maiores molestiae neque nihil nostrum odit officia officiis perferendis provident quasi vero voluptate. Cum
            dolorem eos fugit iusto modi, quaerat sequi. A doloribus, in laboriosam minima nisi quasi ullam. Alias amet
            asperiores aspernatur assumenda atque commodi, consectetur cupiditate dolor dolores eius enim eos esse eum
            ex facilis fugiat fugit itaque iure laudantium maxime minus odit officiis quae quam recusandae rem tempora
            ut! Alias distinctio laboriosam magnam officiis quia ratione sequi! Eaque ipsa numquam porro quos velit vero
            voluptatem? Aliquam, asperiores blanditiis cum delectus dolore dolores eaque, ex facere iure iusto placeat
            repudiandae sed sint tempore, voluptatum. Aperiam assumenda atque blanditiis consequatur cupiditate dolorem
            dolores doloribus ea eius esse est excepturi facere illum iusto libero maiores minus molestias, mollitia
            necessitatibus, odio perferendis perspiciatis quas quidem quis repudiandae sequi similique sint sunt tempora
            voluptatibus! Ab accusantium ad adipisci architecto asperiores aut consequatur deserunt dicta, dolor
            doloremque doloribus dolorum eos error excepturi harum laboriosam laborum libero magni maiores minima nam
            natus nesciunt nisi, qui quia quod quos sed, similique sit ullam unde vel voluptatem voluptatibus.
            Distinctio dolores eos explicabo impedit nemo nesciunt, obcaecati possimus recusandae similique sit.
            Accusantium alias aspernatur consequatur cum doloribus facilis in, inventore ipsa iste itaque laudantium
            neque nihil non perferendis reprehenderit sequi totam. A accusantium alias aliquid animi deleniti
            dignissimos ea eaque eligendi excepturi explicabo facere fuga harum impedit in, ipsa iusto, laboriosam minus
            molestiae molestias mollitia neque provident quaerat quibusdam quis rerum tenetur vel, veritatis! Ad,
            adipisci amet aperiam beatae corporis cumque debitis delectus deleniti ducimus error eveniet illo inventore
            iste itaque iusto laboriosam laborum maiores mollitia nam necessitatibus nesciunt nulla officiis placeat
            quam, ullam ut voluptatum. A dicta ea, eaque esse facilis laborum libero minima neque praesentium quibusdam
            repellendus sequi sunt! A ad adipisci consectetur, cupiditate ex laudantium odio pariatur qui recusandae rem
            repellat tempora. A accusamus, amet, culpa dignissimos, hic impedit iure magnam recusandae rem sint soluta
            temporibus velit voluptates. Accusantium adipisci aliquam aperiam aspernatur aut cumque deserunt dignissimos
            doloribus eaque eos facere impedit in incidunt inventore ipsum itaque libero magnam mollitia natus non
            nostrum obcaecati odit perferendis placeat porro quibusdam quis recusandae, reprehenderit repudiandae sunt
            tempora unde velit, veniam vero voluptatem voluptates voluptatibus. Consequuntur dolor exercitationem in
            nihil nulla possimus quas quasi, sapiente unde voluptatibus. Beatae numquam praesentium rerum vitae
            voluptatum.last
          </p>

        </div>
        <div class="account-more">
          <div class="account-more-content">
            <h2 class="account-more-header">Miromax <br/> бонусна програма</h2>

            <div class="account-more-code">
              <qrcode value="Hello" :options="{ width: 204, height: 204, scale: 1, margin: 0 }"></qrcode>
            </div>

            <p class="account-more-text">
              Надавайте цей QR-код касирам бару та кіно, щоб отримувати та списувати свій Miromax Більше
            </p>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "account",
  data: () => ({
    navIcons: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(27.138 -50.276)"><path class="a" d="M0,0H24V24H0Z" transform="translate(-27.138 50.276)"/><g transform="translate(-24.566 51.276)"><path class="b" d="M-161.1,149.61a5.415,5.415,0,0,0-5.417,5.417,5.424,5.424,0,0,0,5.417,5.417,5.433,5.433,0,0,0,5.417-5.417A5.424,5.424,0,0,0-161.1,149.61Zm0,8.8a3.387,3.387,0,0,1-3.386-3.386,3.387,3.387,0,0,1,3.386-3.386,3.391,3.391,0,0,1,3.386,3.386A3.391,3.391,0,0,1-161.1,158.413Z" transform="translate(170.948 -148.61)"/><path class="c" d="M-154.785,176.944h0a.968.968,0,0,1-.926-.649,8.49,8.49,0,0,0-8.092-5.762,8.49,8.49,0,0,0-8.092,5.762.968.968,0,0,1-.926.649h0a.972.972,0,0,1-.931-1.28,10.451,10.451,0,0,1,9.949-7.054,10.458,10.458,0,0,1,9.949,7.054A.972.972,0,0,1-154.785,176.944Z" transform="translate(173.232 -155.943)"/></g></g></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"/><path class="b" d="M8.57-6.256,7.6-6.264,7.565-6.3a4.717,4.717,0,0,0-.883-.713q-.405-.259-.859-.518H8.57V-8.685H3.715a2.909,2.909,0,0,1-.34-.275,1.706,1.706,0,0,1-.361-.47,1.307,1.307,0,0,1-.134-.607A1.34,1.34,0,0,1,3.444-11.2a2.912,2.912,0,0,1,1.7-.4,4.636,4.636,0,0,1,.806.077,6.223,6.223,0,0,1,.863.219,5.411,5.411,0,0,1,.823.348,3.017,3.017,0,0,1,.669.466V-12.54a2.66,2.66,0,0,0-.644-.275,7.627,7.627,0,0,0-.847-.2q-.446-.081-.879-.126t-.725-.045a7.63,7.63,0,0,0-1.653.174,4.19,4.19,0,0,0-1.386.563,2.875,2.875,0,0,0-.952,1.012A3.05,3.05,0,0,0,.862-9.916,2.322,2.322,0,0,0,1-9.09a2.879,2.879,0,0,0,.211.4H.57v1.158H2.127q.186.121.381.243.592.348,1.248.672.389.186.729.356H.57V-5.1H6.009a1.225,1.225,0,0,1,.186.283,1.168,1.168,0,0,1,.1.494,1.217,1.217,0,0,1-.2.709,1.607,1.607,0,0,1-.515.474,2.3,2.3,0,0,1-.721.267,4.128,4.128,0,0,1-.811.081,4.46,4.46,0,0,1-2.691-.761v1.911a5.949,5.949,0,0,0,2.683.453A6.368,6.368,0,0,0,5.6-1.382a4.366,4.366,0,0,0,1.37-.6A3.151,3.151,0,0,0,7.942-3a2.788,2.788,0,0,0,.369-1.453A1.693,1.693,0,0,0,8.2-5.1H8.57Z" transform="translate(16.57 4.813) rotate(180)"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Zm0,16H5V16H8.56a3.976,3.976,0,0,0,6.9,0H19Zm0-5H14.01a2,2,0,0,1-4,0H5V5H19Z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"/></svg>'
    ],
    links: [
      {title: 'Мій аккаунт', url: '/account/', exact: true},
      {title: 'Бонусна програма', url: '/account/bonus'},
      {title: 'Архів', url: '/account/archive'},
      {title: 'Вийти', url: '/account/logout'},
    ]
  }),
  components: {
    AppHeader
  }
}
</script>

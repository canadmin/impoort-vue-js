<template>
<div>
    <div class="container-fluid">
    <div class="row">
    <div class="col-3">
     <sidebar-menu :menu="menu" :widthCollapsed="'80px'" :width="'300px'"  /> 
    </div>
    <div class="col-6 ">
        <app-post v-for="a in 8"></app-post>
    </div>
    <div class="col-3 ">
        <app-last-watched></app-last-watched>
    </div>
    </div>
    </div>
</div>    
</template>

<script>
import Header from "../common/AppHeader"
import { SidebarMenu } from 'vue-sidebar-menu'
import Post from "./Post"
import LastWatched from "./LastWatched"
export default {
       data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'İmpoort',
                    },
                    {
                        href: { path: '/' },
                        title: 'Ana Sayfa',
                        icon: 'icon-main'
                    },
                    {
                        href: { path: '/index' },
                        title: 'Arama',
                        icon: 'icon-search',
                        
                    },
                    {
                        to: '/index',
                        title: 'Paylaş',
                        icon: 'icon-share',
                        
                    },
                     {
                        to: '/index',
                        title: 'Mesajlarım',
                        icon: 'icon-messages',
                        
                    },
                    {
                        to: '/index',
                        title: 'İzlediklerim',
                        icon: 'icon-watched',
                        
                    },
                    {
                        to: '/index',
                        title: 'Profil',
                        icon: 'icon-profile',
                        
                    }
                ],
            }
        },
    components: {
    SidebarMenu,
    appPost : Post,
    appLastWatched : LastWatched,
    appHeader : Header
  },
 
  
}
</script>

<style >
.v-sidebar-menu{
    opacity: 1;
    background-color: #246590;

} 
.v-sidebar-menu .vsm--header {
    text-align: center;
    color: #F8F1FA;
}
.v-sidebar-menu .vsm--toggle-btn {
    color: #246590;
    background-color: #FFFEFF;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    background-color: #F8F1FA;
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active .vsm--icon, .v-sidebar-menu .vsm--link_level-1.vsm--link_active .vsm--icon {
    color: #fff;
    background-color: #FFFEFF;
}
.v-sidebar-menu .vsm--link {
    color: #fff;
}
.icon-main{
    background: url('../../assets/mainpage.png');
    height: 50px;
    width: 50px;
}
.icon-search {
    background: url('../../assets/search.png');
    height: 50px;
    width: 50px;
}
.icon-share {
    background: url('../../assets/share.png');
    height: 50px;
    width: 50px;
}
.icon-messages {
    background: url('../../assets/messages.png');
    height: 50px;
    width: 50px;
}
.icon-watched {
    background: url('../../assets/watched.png');
    height: 50px;
    width: 50px;
}
.icon-profile {
    background: url('../../assets/profile.png');
    height: 50px;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    height: 50px;
    line-height: 30px;
    width: 50px;
    text-align: center;
    border-radius: 3px;
}
.v-sidebar-menu .vsm--link.vsm--link_level-1.vsm--link_exact-active {
    -webkit-box-shadow: 3px 0px 0px 0px #ffffff inset;
    box-shadow: 3px 0px 0px 0px #ffffff inset;
}

.v-sidebar-menu.vsm--link.vsm--icon.vsm_collapsed.vsm--link_mobile-item.vsm--mobile-bg{
          background-color: #ffffff;

}
</style>


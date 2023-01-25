import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'favicon.ico',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/targetnodes',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Website',
    href: 'https://www.targetnodes.com/',
    icon: 'ChromeIcon',
  })

  return chainMenus
}

export default processMenu()

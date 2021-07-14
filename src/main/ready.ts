import {app, protocol, shell} from 'electron'
import {destroyWindow, showLoginWindow, showWindow} from './utils/windowManager'
import {createBot, getBot} from './ipc/botAndStorage'
import {getConfig} from './utils/configManager'

require('./utils/configManager')
require('./ipc/system')
require('./ipc/botAndStorage')
require('./ipc/openImage')
app.allowRendererProcessReuse = false
if (process.env.NODE_ENV === 'development')
    protocol.registerFileProtocol('file', (request, cb) => {
        const pathname = request.url.replace('file:///', '')
        cb(pathname)
    })
if(getConfig().account.autologin){
    createBot(getConfig().account)
}
else{
    showLoginWindow()
}
app.on('window-all-closed', () => {
    if (getBot()) getBot().logout()
    setTimeout(() => {
        app.quit()
    }, 1000)
})

app.on('web-contents-created', (e, webContents) => {
    webContents.on('new-window', (event, url) => {
        event.preventDefault()
        shell.openExternal(url)
    })
})

app.on('second-instance', showWindow)

app.on('before-quit', () => {
    destroyWindow()
    if (getBot()) getBot().logout()
})

app.on('will-quit', () => {
    destroyWindow()
    if (getBot()) getBot().logout()
})

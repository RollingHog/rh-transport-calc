const VERSION = '1.0.0'

function getEl(str) {
  return document.getElementById(str)
}

try {
  getEl('version_el').innerHTML = VERSION
} catch (error) { }

function init() {
  
}

window.addEventListener('load', init)

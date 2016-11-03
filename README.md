# Javascript findStyleSheet function
Attempts to find valid CSSStyleSheet for supplied href or title parameters
## Usage
```
    //findStyleSheet(filepath, name)
    findStyleSheet('filepath.css');
    findStyleSheet('filepath.css', 'name');
    findStyleSheet({href: 'filepath.css'});
    findStyleSheet({name: 'name'});
    findStyleSheet({href: 'filepath.css', name: 'name'});
```

## Issues

* Ignores style tags as is searching for external sheets - issue/reconsider?
* Name/Title still confusing
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing

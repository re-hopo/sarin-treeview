import './index.css'


class SarinTreeView{

    static #DEFAULT_OPTIONS = {
        items                 : [],
        selected              : [],
        hasSearch             : true,
        searchSelector        : false,
        hasFilter             : true,
        filterSelector        : false,
        filtersSelectorByType : [],
        hasCollapse           : true,
        hasIcon               : true,
        initialEvent          : false,
        hasArrow              : true,
        hasFinder             : true,
        hasBreakPoint         : '992px',
        clickable             : true,
        clickableTypes        : false,
        middleClick           : true,
        multiSelect           : true,
        searchPlaceholder     : 'search',
        clearFilterIcon       : '<svg width="22" height="22" x="0" y="0" viewBox="0 0 15 15"><g><g fill-rule="evenodd" clip-rule="evenodd"><path d="M6.793 7.5 3.646 4.354l.708-.708L7.5 6.793l3.146-3.147.708.708L8.207 7.5l3.147 3.146-.708.708L7.5 8.207l-3.146 3.147-.708-.708z"></path><path d="M3.646 3.646a.5.5 0 0 1 .708 0L7.5 6.793l3.146-3.147a.5.5 0 0 1 .708.708L8.207 7.5l3.147 3.146a.5.5 0 0 1-.708.708L7.5 8.207l-3.146 3.147a.5.5 0 0 1-.708-.708L6.793 7.5 3.646 4.354a.5.5 0 0 1 0-.708z"></path></g></g></svg>',
        clearSearchIcon       : '<svg width="20" height="23" x="0" y="0" viewBox="0 0 15 15" fill="#fff"><g><g fill-rule="evenodd" clip-rule="evenodd"><path d="M6.793 7.5 3.646 4.354l.708-.708L7.5 6.793l3.146-3.147.708.708L8.207 7.5l3.147 3.146-.708.708L7.5 8.207l-3.146 3.147-.708-.708z"></path><path d="M3.646 3.646a.5.5 0 0 1 .708 0L7.5 6.793l3.146-3.147a.5.5 0 0 1 .708.708L8.207 7.5l3.147 3.146a.5.5 0 0 1-.708.708L7.5 8.207l-3.146 3.147a.5.5 0 0 1-.708-.708L6.793 7.5 3.646 4.354a.5.5 0 0 1 0-.708z"></path></g></g></svg>',
        collapseButtonIcon    : '<svg width="18" height="24" x="0" y="0" viewBox="0 0 24 24"><g><g><path d="M11 21.625a.75.75 0 0 1-.75-.75V14a.25.25 0 0 0-.25-.25H3.125a.75.75 0 0 1 0-1.5H10A1.752 1.752 0 0 1 11.75 14v6.875a.75.75 0 0 1-.75.75z"></path><path d="M2 22.75a.75.75 0 0 1-.53-1.28l8-8a.75.75 0 0 1 1.06 1.06l-8 8a.748.748 0 0 1-.53.22z" opacity="1" data-original="#232323"></path><g><path d="M20.875 11.75H14A1.752 1.752 0 0 1 12.25 10V3.125a.75.75 0 0 1 1.5 0V10a.25.25 0 0 0 .25.25h6.875a.75.75 0 0 1 0 1.5z"></path><path d="M14 10.75a.75.75 0 0 1-.53-1.28l8-8a.75.75 0 0 1 1.06 1.06l-8 8a.747.747 0 0 1-.53.22z"></path></g></g></g></svg>',
        findButtonIcon        : '<svg width="21" height="21" x="0" y="0" viewBox="0 0 512 512"><g><path d="M496.988 240.971h-34.046c-6.768-103.018-89.08-185.733-191.929-193.125V15.012C271.012 6.721 264.291 0 256 0s-15.012 6.721-15.012 15.012v32.833C138.139 55.237 55.828 137.954 49.059 240.97H15.012C6.721 240.971 0 247.692 0 255.983s6.721 15.012 15.012 15.012h34.219c7.923 101.496 89.224 182.715 190.756 190.504v35.489c0 8.291 6.721 15.012 15.012 15.012s15.012-6.721 15.012-15.012V461.63c102.462-6.87 184.784-88.472 192.758-190.633h34.219c8.291 0 15.012-6.721 15.012-15.012 0-8.292-6.721-15.014-15.012-15.014zm-113.786 30.024h49.426c-7.831 85.594-76.718 153.797-162.617 160.541v-48.334c0-8.291-6.721-15.012-15.012-15.012s-15.012 6.721-15.012 15.012v48.156c-84.964-7.639-152.845-75.436-160.614-160.362h49.426c8.291 0 15.012-6.721 15.012-15.012s-6.721-15.012-15.012-15.012H79.145c6.651-86.456 75.559-155.741 161.843-163.007V128.8c0 8.291 6.721 15.012 15.012 15.012s15.012-6.721 15.012-15.012V77.964c86.284 7.266 155.192 76.552 161.843 163.007h-49.653c-8.291 0-15.012 6.721-15.012 15.012s6.722 15.012 15.012 15.012z" ></path><path d="M270.935 253.229c-.05-.49-.12-.981-.22-1.461-.09-.47-.21-.951-.36-1.421-.14-.47-.31-.931-.49-1.381-.19-.45-.4-.901-.631-1.331-.23-.43-.48-.861-.751-1.261-.27-.41-.57-.811-.881-1.191s-.641-.751-.991-1.091a14.88 14.88 0 0 0-3.543-2.623 14.496 14.496 0 0 0-2.712-1.12c-.46-.14-.941-.27-1.421-.36-.48-.1-.971-.17-1.461-.22a14.561 14.561 0 0 0-4.403.22c-.48.09-.961.22-1.431.36-.46.14-.931.31-1.381.49-.45.19-.901.4-1.331.63-.43.23-.851.48-1.261.751s-.811.57-1.181.881c-.38.31-.751.641-1.101.991-.35.34-.681.711-.991 1.091-.31.38-.6.781-.871 1.191-.27.4-.53.831-.761 1.261-.23.43-.44.881-.62 1.331-.19.45-.36.911-.5 1.381s-.26.951-.36 1.421a14.296 14.296 0 0 0-.29 2.942 14.484 14.484 0 0 0 .29 2.932c.1.47.22.951.36 1.421.14.47.31.931.5 1.381.18.45.39.901.62 1.331s.49.851.761 1.261.56.811.871 1.191a14.556 14.556 0 0 0 2.092 2.082c.37.31.771.61 1.181.881.41.27.831.52 1.261.751.43.23.881.44 1.331.63.45.18.921.35 1.381.49.47.14.951.27 1.431.36.48.1.971.17 1.451.22.49.05.991.08 1.481.08.49 0 .981-.03 1.471-.08.49-.05.981-.12 1.461-.22.48-.09.961-.22 1.421-.36.47-.14.931-.31 1.381-.49.46-.19.901-.4 1.331-.63.43-.23.861-.48 1.261-.751.41-.27.811-.57 1.191-.881.38-.31.751-.641 1.091-.991a14.556 14.556 0 0 0 1.872-2.282c.27-.41.52-.831.751-1.261.23-.43.44-.881.631-1.331.18-.45.35-.911.49-1.381.15-.47.27-.951.36-1.421.1-.48.17-.971.22-1.461.05-.49.08-.981.08-1.471 0-.49-.03-.991-.08-1.481z"></path></g></svg>',
        direction             : 'ltr',
        rootType              : 'zone',
        allActive             : false,
        parentActive          : true,
        indent                : 1,
        collapse              : true,
        actions               : []
    }

    static #target
    static #selector
    static #treeViewConElem
    static #filterContainerElem
    static #searchElem
    static #filterElem
    static #filterUlElem
    static #clickedItems = []
    static #openedItems = []
    static #items = []
    static selected = []
    static items
    static hasSearch
    static searchSelector
    static hasFilter
    static filterSelector
    static filtersSelectorByType
    static hasCollapse
    static hasIcon
    static initialEvent
    static hasArrow
    static hasFinder
    static hasBreakPoint
    static clickable
    static clickableTypes
    static middleClick
    static multiSelect
    static searchPlaceholder
    static clearFilterIcon
    static clearSearchIcon
    static collapseButtonIcon
    static findButtonIcon
    static direction
    static rootType
    static allActive
    static parentActive
    static indent
    static collapse
    static actions
    static renderCount = 0
    static initStatus  = true


    static init(selector ,options)
    {
        if(!this.checkElem(selector))
            throw new Error('Target Not Found!');

        this.resetAttributes(options)
        this.updateOption(options)
        this.environmentPreparation()
        this.createRoot()
        this.createContainers()
        this.render()
        this.eventJustOnce()

        this.initStatus = false
    }


    static checkElem(selector)
    {
        this.#selector = selector
        const element  = document.querySelector(selector);
        return typeof (element) != 'undefined' && element != null;
    }


    static createRoot()
    {
        this.#target = this.createElem('div' ,`sarin-tree-view-root ${this.clickable ? 'clickable' : ''} ${this.hasBreakPoint ? 'break-point-'+this.hasBreakPoint : ''} `)
        document.querySelector(this.#selector).append(this.#target)
    }


    static resetAttributes()
    {
        this.#treeViewConElem = null
        this.#filterContainerElem = null
        this.#searchElem = null
        this.#filterElem = null
        this.#filterUlElem = null
        this.#clickedItems = []
        this.#openedItems = []
        this.#items = []
    }


    static updateOption(options)
    {
        Object.entries(this.#DEFAULT_OPTIONS).forEach(([key, value]) => {
            this[key] = key in options ? options[key] : value
        })
        this.#items = this.items
    }


    static environmentPreparation()
    {
        if (this.middleClick)
            document.body.onmousedown = function(e) {
                if(e.button === 1) {
                    e.preventDefault();
                    return false;
                }
            }
    }


    static createContainers()
    {
        this.createMobileMenuDom()
        this.createFiltersContainer()
        this.createFilterDom()
        this.createSearchDom()
        this.createTreeViewDom()
    }


    static createFiltersContainer()
    {
        if((this.hasFilter || this.hasSearch) && (!this.searchSelector || !this.filterSelector)){
            this.#filterContainerElem = this.createElem("div" ,`sarin-filters-root`)
            this.#target.append(
                this.#filterContainerElem
            )
        }
    }


    static createFilterDom()
    {
        if(this.hasFilter && this.filtersSelectorByType.length === 0){
            this.#filterElem   = this.createElem("div" ,`sarin-filter-con sarin-${this.direction}`)
            this.#filterUlElem = this.createElem("ul"  ,'sarin-filter-ul')
            this.#filterElem.append(this.#filterUlElem)
            if(this.filterSelector){
                const dynamicFilter = document.querySelector(this.filterSelector)
                if (dynamicFilter)
                    dynamicFilter.append(this.#filterElem)
            }
            else{
                this.#filterContainerElem.append(
                    this.#filterElem
                )
            }
        }
    }


    static createSearchDom()
    {
        if(this.hasSearch){
            const searchCon   = this.createElem("div"    ,`sarin-search-con sarin-${this.direction} normal ${this.allActive ? 'expanded' : 'collapsed'}`)
            const searchInput = this.createElem("input"  ,'sarin-search-input' ,null,{placeholder:this.searchPlaceholder})
            const searchClear = this.createElem("button" ,'sarin-search-clear-btn' ,this.clearSearchIcon)
            searchCon.append(searchInput)
            searchCon.append(searchClear)

            if(this.hasCollapse) {
                const expandOrCollapse = this.createElem("button", 'sarin-expand-collapse' ,this.collapseButtonIcon ,{type:'button'})
                searchCon.append(expandOrCollapse)
            }
            this.#searchElem = searchCon;

            if(this.searchSelector){
                const dynamicSearch = document.querySelector(this.searchSelector)
                if (dynamicSearch)
                    dynamicSearch.append(this.#searchElem)
            }
            else{
                this.#filterContainerElem.append(
                    this.#searchElem
                )
            }
        }
    }


    static createTreeViewDom()
    {
        this.#treeViewConElem = this.createElem('div' ,`sarin-tree-view-items-con sarin-${this.direction} indent-${this.indent}`)
        this.#target.append(
            this.#treeViewConElem
        )
    }


    static createMobileMenuDom()
    {
        if(this.hasBreakPoint){
            const mobileCon    = this.createElem('div' ,`sarin-mobile-con`)
            const header       = this.createElem('div' ,`sarin-mobile-header`)
            const mobileButton = this.createElem('button', 'sarin-mobile-close-button ki-outline ki-cross btn btn-danger' ,'' ,{type:'button'})
            const mobileTitle  = this.createElem('span', 'sarin-mobile-title fs-4' ,'انتخاب دسته بندی')
            header.append(mobileTitle)
            header.append(mobileButton)
            mobileCon.append(header)
            this.#target.append(
                mobileCon
            )
        }
    }


    static createElem(tag ,classItem = null ,innerHTML = null ,attributes = null){
        const elem = document.createElement(tag)

        if(classItem)
            elem.className += classItem

        if(innerHTML)
            elem.innerHTML = innerHTML

        if(attributes)
            for(const key in attributes) elem.setAttribute(key, attributes[key])

        return elem;
    }


    static render(search = false)
    {
        this.reset()
        this.html(search)
        const $this = this;
        setTimeout(function (){
            $this.eventOnEveryRender()
        })
        this.renderCount++;
    }


    static reset()
    {
        this.#treeViewConElem.innerHTML = ''
    }


    static html(search)
    {
        const loop = (items ,parent_id) => {
            if(typeof(items) !== 'undefined' && items){
                items.forEach(item => {
                    if(!this.renderCount)
                        this.selectedItems(item) && this.#clickedItems.push(this.object(item))

                    if(typeof(item.nodes) == 'object' && !search){
                        this.item(item ,parent_id ,search)
                        loop(item.nodes ,item.id)
                    }
                    else{
                        this.item(item ,parent_id ,search ,true)
                    }
                })
            }
        }
        loop(this.#items ,null)
    }


    static item(data ,parent_id ,search ,child = null)
    {
        const div = this.createElem(
            'div',
            `tree-view-item ${this.clickableHandler(data.node_type)} ${this.containClicked(data)} ${this.containOpened(data)} `+
            `${!child && data.nodes && data.nodes.length ? ` has-children` :(!child ? ` empty-children`: ` child`)}`+
            `${this.allActive ? ` opened` : `` }`,
            null,
            {'data-node-id':data.id,'data-node-type':data.node_type }
        )
        const wrap = this.createElem(
            'div',
            'contentWrapper'
        );
        div.append(wrap)

        if(!search)
            div.append(
                this.createElem(
                    'div',
                    `childrenWrapper`,
                )
            )

        if(search)
            wrap.append(
                this.createElem(
                    'button',
                    `finder sarin-finder`,
                    this.findButtonIcon
                )
            )

        if(this.hasArrow && !child && !search)
            wrap.append(
                this.createElem(
                    'button',
                    'arrow right',
                    null,
                    {type : 'button'}
                )
            )

        if(this.hasIcon)
            wrap.appendChild(this.createElem('i' ,data.icon))

        wrap.appendChild(this.createElem('span' ,'title' ,data.name))

        if(Array.isArray(this.actions))
            wrap.appendChild(this.appendCustomElement(data))

        if(parent_id && !search){
            this.#treeViewConElem.querySelector(`.tree-view-item[data-node-id="${parent_id}"][data-node-type=${this.rootType}] .childrenWrapper`).append(div)
        }
        else{
            div.className += ' fixed-active'
            if(this.parentActive)
                div.className += ' opened'

            this.#treeViewConElem.append(div)
        }
    }


    static appendCustomElement(data)
    {
        const actionsWrapper = this.createElem(
            'div',
            'actions'
        );
        this.actions.forEach(item => {
            let conditionStatus = false;

            if (Array.isArray(item.conditions))
                for (const condition of item.conditions){
                    for (const conditionKey in condition){

                        if(conditionKey === 'logic')
                            continue

                        let item = condition[conditionKey]

                        if(data[conditionKey] !== undefined)
                            if(item.operator === 'includesCheck' && item.value.includes(data[conditionKey]))
                                conditionStatus = true;
                            else if(item.operator === 'booleanCheck' && data[conditionKey] === item.value)
                                conditionStatus = true;
                            else if(!['includesCheck' ,'booleanCheck'].includes(item.operator) && eval('data[conditionKey]' + item.operator + 'item.value'))
                                conditionStatus = true;
                            else
                                conditionStatus = false;

                        if(condition['logic'] === 'OR' && conditionStatus)
                            break;
                        else if(condition['logic'] === 'AND' && !conditionStatus)
                            break
                    }
                }

            else
                conditionStatus = true;

            if(conditionStatus){
                const attributes     = item.attributes;
                attributes.node_id   = data.id
                attributes.node_type = data.node_type
                actionsWrapper.appendChild(
                    this.createElem(item.tag ,item.classes ,item.html ,attributes)
                )
            }
        })
        return actionsWrapper;
    }


    static eventOnEveryRender()
    {
        if(this.clickable){
            const clickToggle = document.querySelectorAll('.sarin-tree-view-root .tree-view-item.clickable span.title')
            clickToggle.forEach(elem => {
                elem.addEventListener('click' ,e => clickEventFunc(e))
                if(this.middleClick)
                    elem.addEventListener('auxclick' ,e => clickEventFunc(e ,'auxclick'))

                const clickEventFunc = async (e ,type = 'click') => {
                    const id         = this.getDataAttributeOnEvent(e, 'data-node-id')
                    const node_type  = this.getDataAttributeOnEvent(e, 'data-node-type')
                    const item       = this.findItem(id, node_type)
                    const exist      = this.#clickedItems.find(node => node.id === item.id && node.node_type === item.node_type);

                    if (type === 'click') {
                        if (exist) {
                            this.#clickedItems = this.filter(this.#clickedItems, node_type ,id)
                            this.toggleClickedClassWrapper(item, false)
                        } else if (this.multiSelect) {
                            this.#clickedItems.push(this.object(item))
                            this.toggleClickedClassWrapper(item)
                        } else {
                            this.#clickedItems = [this.object(item)]
                            this.clearClickedClassWrapper()
                            this.toggleClickedClassWrapper(item)
                        }

                    }else if (type === 'auxclick') {
                        e.preventDefault();
                        if (e.button === 1){
                            if (exist) {
                                this.#clickedItems = [];
                                this.clearClickedClassWrapper()
                                this.toggleClickedClassWrapper(item, false)
                            }
                            else {
                                this.#clickedItems = [this.object(item)]
                                this.clearClickedClassWrapper()
                                this.toggleClickedClassWrapper(item)
                            }
                        }
                    }

                    this.filterUpdate()
                    window.dispatchEvent(
                        new CustomEvent(`${this.#selector}--clicked`, {
                            detail: {
                                affected: item,
                                items: this.#clickedItems,
                            }
                        })
                    );
                }
            })
        }

        if(this.hasArrow){
            const openToggle  = document.querySelectorAll('.sarin-tree-view-items-con .has-children button.arrow')
            openToggle.forEach(elem => {
                elem.addEventListener('click' ,async e => {
                    const id         = this.getDataAttributeOnEvent(e ,'data-node-id')
                    const node_type  = this.getDataAttributeOnEvent(e ,'data-node-type')
                    const current    = document.querySelector(`.tree-view-item[data-node-id="${id}"][data-node-type="${node_type}"]`);
                    const item       = await this.findItem(id ,node_type)

                    if (current.classList.contains('opened')) {
                        this.#openedItems = this.#openedItems.filter(node => node.id !== Number(item.id) && node.node_type === item.node_type)
                        current.classList.remove('opened')
                        this.toggleActiveChildrenClass(id ,node_type , false)

                    }else {
                        this.#openedItems.push(this.object(item))
                        current.classList.add('opened')
                        this.toggleActiveChildrenClass(id ,node_type)
                    }

                    window.dispatchEvent(
                        new CustomEvent(`${this.#selector}--toggled` ,{
                            detail: {
                                affected: item,
                                items: this.#clickedItems,
                                openItems: this.#openedItems,
                            }
                        })
                    );

                    this.filterUpdate()
                })
            })
        }

        if(this.hasBreakPoint){
            const closeMobileView = document.querySelector('.sarin-mobile-close-button')
            const rootCon = `.sarin-tree-view-root.break-point-${this.hasBreakPoint}`
            closeMobileView.addEventListener('click', function (){
                document.querySelector(rootCon).style.display = 'none'
            })
        }

        this.filterUpdate()
    }


    static filterUpdate()
    {
        if(this.hasFilter){
            if(this.filtersSelectorByType.length !== 0){
                for (const selector in this.filtersSelectorByType) {
                    document.querySelector(`#${this.filtersSelectorByType[selector]}`).innerHTML = ''
                }
            }else{
                this.#filterUlElem.innerHTML = ''
            }

            this.#clickedItems.forEach(item => {
                const div = this.createElem(
                    'li',
                    'filter-item',
                    null,
                    {'data-node-id':item.id,'data-node-type':item.node_type}
                )
                div.append(this.createElem(
                    'p',
                    null,
                    item.data.name,
                ))
                div.append(this.createElem(
                    'button',
                    'filter-remove',
                    this.clearFilterIcon,
                    {type:'button'}
                ))

                if(this.filtersSelectorByType.length !== 0){
                    const filterUiByType = this.filtersSelectorByType[item.node_type];
                    setTimeout(function (){
                        const filterUiByTypeElem = document.querySelector(`#${filterUiByType}`)
                        filterUiByTypeElem.append(
                            div
                        )
                    },this.initStatus ? 1000 : 200)
                }else{
                    this.#filterUlElem.append(
                        div
                    )
                }

            })
            this.filterEvent()
        }
    }


    static filterEvent()
    {
        if(this.hasFilter){
            const $this = this;
            setTimeout(function (){
                const closeFilter = document.querySelectorAll('.sarin-filter-con .filter-item button.filter-remove')
                closeFilter.forEach(elem => {
                    elem.addEventListener('click' ,e => clickEventFunc(e))
                    if($this.middleClick)
                        elem.addEventListener('auxclick' ,e => clickEventFunc(e ,'auxclick'))

                    const clickEventFunc = async (e ,type = 'click') => {
                        const node_id   = elem.parentElement.getAttribute('data-node-id')
                        const node_type = elem.parentElement.getAttribute('data-node-type')

                        if (type === 'click') {
                            $this.#clickedItems = $this.#clickedItems.filter(node => node.node_type !== node_type || node.id !== Number(node_id))
                            const specific      = $this.#treeViewConElem.querySelector(`.tree-view-item[data-node-id="${node_id}"][data-node-type="${node_type}"]`);
                            specific && specific.classList.remove('clicked')

                        }else if (type === 'auxclick') {
                            e.preventDefault();
                            if (e.button === 1){
                                $this.#clickedItems = [];
                                $this.clearClickedClassWrapper()
                            }
                        }

                        $this.filterUpdate()
                        window.dispatchEvent(
                            new CustomEvent(`${$this.#selector}--filter-remove` ,{
                                detail: {
                                    affected: await $this.find(node_id ,node_type),
                                    items: $this.#clickedItems,
                                }
                            })
                        );
                    }
                })
            },200)
        }
    }


    static eventJustOnce()
    {
        if(this.hasCollapse){
            const expandOrCollapse = document.querySelector('button.sarin-expand-collapse')
            if(expandOrCollapse)
                expandOrCollapse.addEventListener('click' ,e => {
                    if(this.#searchElem.classList.contains('normal')){
                        let collapseStat = 'collapsed';
                        const items      = this.#target.querySelectorAll('.tree-view-item.has-children')

                        if(this.#searchElem.classList.contains('collapsed')){
                            items.forEach(elem =>{
                                if(!elem.classList.contains('opened'))
                                    elem.classList.add('opened')
                            })

                            this.#searchElem.classList.remove('collapsed')
                            this.#searchElem.classList.add('expanded')
                            collapseStat = 'expanded'

                        }else{
                            items.forEach(elem => {
                                if(elem.classList.contains('opened'))
                                    elem.classList.remove('opened')
                            })

                            this.#searchElem.classList.remove('expanded')
                            this.#searchElem.classList.add('collapsed')
                        }

                        window.dispatchEvent(
                            new CustomEvent(`${this.#selector}--${collapseStat}`)
                        );
                    }
                })
        }

        if(this.hasSearch){
            const searchInput = document.querySelector('.sarin-search-con input')
            const clearButton = document.querySelector('.sarin-search-con button')

            searchInput.addEventListener('keyup' ,e => {
                const keyword = e.target.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')

                if(keyword){
                    if(this.#searchElem.classList.contains('normal')){
                        this.#searchElem.classList.remove('normal')
                        this.#searchElem.classList.add('searched')
                    }

                    if(this.#searchElem.classList.contains('expanded')){
                        this.#searchElem.classList.remove('expanded')
                        this.#searchElem.classList.add('collapsed')
                    }

                    this.#items = this.searchByText(keyword)
                    this.render(true)
                    this.eventOnSearch()
                }else{
                    if(this.#searchElem.classList.contains('searched')){
                        this.#searchElem.classList.remove('searched')
                        this.#searchElem.classList.add('normal')
                    }
                    this.#items = this.items
                    this.render()
                }
            })

            clearButton.addEventListener('click' ,e => {
                if (this.#searchElem.classList.contains('searched')){
                    this.#items = this.items
                    searchInput.value = ''
                    this.#searchElem.classList.remove('searched')
                    this.#searchElem.classList.add('normal')
                    this.render()
                }
            })

        }

        if(this.initialEvent){
            window.dispatchEvent(
                new CustomEvent(`${this.#selector}--initial` ,{
                    detail: {
                        affected: null,
                        items: this.selected,
                    }
                })
            );
        }
    }


    static eventOnSearch()
    {
        if(this.hasFinder){
            const searchInput = document.querySelector('.sarin-search-con input')
            const findItem    = document.querySelectorAll('button.sarin-finder')
            findItem.forEach(finderElem => {
                finderElem.addEventListener('click' ,e => {
                    const node_id   = finderElem.parentElement.parentElement.getAttribute('data-node-id')
                    const node_type = finderElem.parentElement.parentElement.getAttribute('data-node-type')
                    if (this.#searchElem.classList.contains('searched')){
                        this.#items = this.items
                        searchInput.value = ''
                        this.#searchElem.classList.remove('searched')
                        this.#searchElem.classList.add('normal')
                        this.render()
                    }
                    this.#items = this.items
                    this.render()
                    this.#openedItems = []
                    this.allActive = false
                    const specific = this.#treeViewConElem.querySelector(`.tree-view-item[data-node-id="${node_id}"][data-node-type="${node_type}"]`);
                    const parents  = this.getParents(specific)
                    for (const parent of parents)
                        if (!parent.classList.contains('opened'))
                            parent.classList.add('opened')

                    specific.scroll(0, 1);
                    specific.classList.add('on-finder')

                    setTimeout(()=>{
                        specific.classList.remove('on-finder')
                    } ,7000)

                    window.dispatchEvent(
                        new CustomEvent(`${this.#selector}--find-item`)
                    );
                })
            })
        }
    }


    static getParents(elem) {
        let parents = [];
        for (;elem && elem !== document.querySelector('.sarin-tree-view-items-con'); elem = elem.parentNode)
            if(elem.classList.contains('tree-view-item'))
                parents.push(elem);

        return parents;
    }


    static findItem(id ,node_type)
    {
        let data;
        const loop = (items) => {
            if(typeof(items) !== 'undefined' && items){
                items.forEach(item => {
                    if(Number(item.id) === Number(id) && item.node_type === node_type){
                        data = item;
                        return;
                    }
                    if(typeof(item.nodes) == 'object'){
                        loop(item.nodes)
                    }
                })
            }
        }
        loop(this.items)
        return data;
    }


    static searchByText(keyword)
    {
        let data = [];
        const loop = (items) => {
            if(typeof(items) !== 'undefined' && items)
                items.forEach(item  => {
                    if(item.name.search(keyword) >= 0)
                        data.push(item);

                    if(typeof(item.nodes) == 'object')
                        loop(item.nodes)

                })
        }
        loop(this.items)
        return data;
    }


    static clearClickedClassWrapper()
    {
        const elements = this.#treeViewConElem.querySelectorAll(`.tree-view-item`)
        elements.forEach(elem => elem.classList.remove('clicked'))
    }


    static toggleClickedClassWrapper(item ,addClass = true)
    {
        const element = this.#treeViewConElem.querySelector(`.tree-view-item[data-node-id="${item.id}"][data-node-type="${item.node_type}"]`);
        addClass
            ? element.classList.add('clicked')
            : element.classList.remove('clicked')
    }


    static toggleActiveChildrenClass(id ,node_type ,openClass = true)
    {
        const children = this.#treeViewConElem.querySelectorAll(`.has-children[data-node-id="${id}"][data-node-type="${node_type}"]>.childrenWrapper>.tree-view-item`);
        children.length && children.forEach(i => {
            if(openClass){
                i.classList.add('active')
            }
            else{
                i.classList.remove('active')
                for (const child of i.children){
                    child.classList.remove('active')
                }
            }
        })
    }


    static getDataAttributeOnEvent(element ,attribute)
    {
        return element.target.parentElement.parentElement.getAttribute(attribute)
    }


    static object(item)
    {
        return {id :item.id ,node_type :item.node_type ,data:item }
    }


    static containClicked(data)
    {
        return this.some(this.#clickedItems ,data) || this.selectedItems(data) ? 'clicked active' : ''
    }


    static clickableHandler(node_type)
    {
        if(this.clickableTypes === false)
            return 'clickable'

        if(Array.isArray(this.clickableTypes ) && this.clickableTypes.includes(node_type))
            return 'clickable';

        return ''
    }


    static containOpened(data)
    {
        return this.some(this.#openedItems ,data) || this.selectedItems(data) ? 'opened active' : ''
    }


    static find(items ,target)
    {
        return Array.isArray(items) && items.find(node => Number(node.id) === Number(target.id) && node.node_type === target.node_type)
    }


    static filter(items ,node_type ,id)
    {
        return Array.isArray(items) && items.filter(node => node.node_type !== node_type || node.id !== Number(id))
    }


    static some(items ,target)
    {
        return Array.isArray(items) && items.some(node => Number(node.id) === Number(target.id) && node.node_type === target.node_type)
    }


    static selectedItems(target)
    {
        return this.selected && this.some(this.selected ,target)
    }
}



if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = SarinTreeView;


if(typeof SarinTreeView !== 'function')
    if (!window.SarinTreeView)
        window.SarinTreeView = SarinTreeView


export default SarinTreeView;

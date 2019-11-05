import React, { Component } from 'react'
import dataRaw from '../fakeData'
// const data = shuffle(dataRaw)
import MediumPost from './MediumPost'
import NoFound from './NoFound'
// import axios from 'axios'
console.log(dataRaw)

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export default class Home extends Component {
    state = {
        searchInput: '',
        sources: { 'Articles': true, 'Works': true },
        categories: { 'web': true, 'machine learning': true, 'design': true, 'other': true },
        // allPosts: null
        allPosts: null
    };

    componentDidMount = () => {
        // axios.get('/posts').then(response => {
        //     console.log(response.data)
        //     const data = response.data

        //     this.setState({
        //         allPosts: new Set(shuffle(data))

        //     }, () => console.log('NEW STATE:', this.state.allPosts))

        // }).catch(err => console.log(err))
        //######
        this.setState({
            allPosts: shuffle(dataRaw)
        })
    };


    handleChange = e => {

        const { name, value } = e.target

        this.setState({

            [name]: value
        });
    };

    toggle = (source, target) => {

        this.setState({

            [source]: { ...this.state[source], [target]: !this.state[source][target] },
        });
    };


    render() {



        const sourceTags = Object.keys(this.state.sources).map((x, i) => {

            const style = this.state.sources[x] === true ? 'cat-tag-actif' : 'cat-tag'

            return <li key={i} className={style} onClick={() => this.toggle("sources", x)}>{x}</li>

        });

        const categoryTags = Object.keys(this.state.categories).map((x, i) => {

            const style = this.state.categories[x] === true ? 'cat-tag-actif' : 'cat-tag'

            return <li key={i} className={style} onClick={() => this.toggle("categories", x)}>{x}</li>

        });


        // get new Set of truth categories
        const truthCategories = new Set(Object.keys(this.state.categories).filter(x => this.state.categories[x] === true));

        const truthSources = Object.keys(this.state.sources).filter(x => this.state.sources[x] === true).map(x => {
            return x === 'Articles' ? 'Medium' : 'Github'
        });
        console.log(this.state.allPosts)
        //###################################
        // get the intersection between sets (truthCategories & allThePosts.categories)

        const displayedSet = this.state.allPosts && [...this.state.allPosts].filter(x => {
            return x.categories.map(category => truthCategories.has(category)).includes(true) && truthSources.includes(x.source)
        });
        console.log('DISPLAYED SET:', displayedSet)

        // filter result with search input


        const displayedPosts = displayedSet && displayedSet.filter(x => {
            return x.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || (x.tech && x.tech.some(e => e.toLowerCase().startsWith(this.state.searchInput.toLowerCase())))
        }).map(x => {
            return <MediumPost key={x.title} post={x} />
        });
        console.log('DISPLAYED POSTS:', displayedPosts && displayedPosts.length)

        //###################################

        return (

            <div>

                <input onChange={this.handleChange} name='searchInput' type="text" className='search-home' placeholder='Search...' />

                <div className='home-tag-container'>

                    <span>show</span> <ul className='list-of-tags'>{categoryTags}</ul><span>in</span>

                    <ul className='list-of-tags'>{sourceTags}</ul>
                </div>
                {/* <div> */}
                {/* {displayedPosts && displayedPosts.length && displayedPosts.length === 1 ? <span> {displayedPosts.length} post</span> : <span>{displayedPosts.length} posts</span>} */}
                {/* </div> */}

                {displayedPosts && displayedPosts.length ? displayedPosts : <NoFound message={"Nothing matches your request yet..."} />}

            </div>
        )
    }
}

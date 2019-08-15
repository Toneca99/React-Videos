import React from 'react';
import Searchbar from './Searchbar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube'

class App extends React.Component {

    state = { videos: [], selectedVideo: null, viewport: window.innerWidth};

    componentDidMount() {
        this.onFormSubmit('universe');
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setDimension);
    
    }

    handleResize = () => {
        this.setState({ viewport: window.innerWidth});
    }

    onFormSubmit = async term => {
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[2]
        })

    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    render() {
        const isDesktop = this.state.viewport > 1000;

        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onFormSubmit} />
                <main className={isDesktop ? "ui grid" : null}>
                   <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} isDesktop={isDesktop} />
                    </div>
                    <aside className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </aside>
                   </div>
                </main>

            </div>
        );
    }

}

export default App;
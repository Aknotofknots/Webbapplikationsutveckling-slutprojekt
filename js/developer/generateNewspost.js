let newsApp =
{
    /**
     * creates a newsfeed column
     */
    //TODO fixa namnen på blogpost osv till newspost
    createNewsColumn: function () {
        let documentFragment = document.createDocumentFragment();

        let columnLine = document.createElement('hr');
        let newsHeader = document.createElement('h2');
        let newsHeaderLink = document.createElement('a');
        let newsPhotoFlipContainer = document.createElement('section');
        let newsPhoto = document.createElement('img');
        let newsPhotoBackContainer = document.createElement('section');
        let backHeader = document.createElement('span');
        let backheaderUnderline = document.createElement('hr');
        let getBiographyButton = document.createElement('button');
        let biographySummary = document.createElement('p');
        let newLine = document.createElement('br');

        let newsContainer = document.createElement('section');
        let newsContainerHeadingGroup = document.createElement('section');
        let newsContainerHeading = document.createElement('section');
        let newsTitle = document.createElement('h4');
        let newsTitleCollapse = document.createElement('a');
        let newsBodyCollapseGroup = document.createElement('section');
        let newsBody = document.createElement('section');
        let newsBodyText = document.createElement('span');
        let newsTimeIcon = document.createElement('i');
        let newsTimeIconText = document.createElement('span');
        let newsTime = document.createElement('span');
        let date = new Date();

        let newsTimeIconUnderline = document.createElement('hr');

        let newsColumn = document.getElementById('newscolumn');
        let newsColumnContainer = document.getElementById('newscolumn-container');

        newsColumnContainer.appendChild(columnLine);
        newsColumnContainer.appendChild(newsHeader);
        newsHeader.classList.add('newspost-header', 'text-center');
        newsHeader.appendChild(newsHeaderLink);
        newsHeaderLink.setAttribute('href', '#');
        newsColumnContainer.appendChild(newsPhotoFlipContainer);
        newsPhotoFlipContainer.classList.add('flip');
        newsPhotoFlipContainer.appendChild(newsPhoto);
        newsPhoto.classList.add('front', 'img-responsive');
        newsPhoto.setAttribute('src', '#');
        newsPhotoFlipContainer.appendChild(newsPhotoBackContainer);
        newsPhotoBackContainer.classList.add('back');
        newsPhotoBackContainer.appendChild(backHeader);
        backHeader.textContent = 'Biography';
        newsPhotoBackContainer.appendChild(backheaderUnderline);
        newsPhotoBackContainer.appendChild(getBiographyButton);
        getBiographyButton.id = 'getbio';
        getBiographyButton.classList.add('btn', 'btn-primary');
        getBiographyButton.setAttribute('type', 'submit');
        getBiographyButton.textContent = 'Get artist biography';
        newsPhotoBackContainer.appendChild(biographySummary);
        biographySummary.id = 'biotext';

        newsColumnContainer.appendChild(newLine);
        newsColumnContainer.appendChild(newsContainer);
        newsContainer.classList.add('panel-group');
        newsContainer.appendChild(newsContainerHeadingGroup);
        newsContainerHeadingGroup.classList.add('panel', 'panel-default');
        newsContainerHeadingGroup.appendChild(newsContainerHeading);
        newsContainerHeading.classList.add('panel-heading');
        newsContainerHeading.appendChild(newsTitle);
        newsTitle.classList.add('panel-title');
        newsTitle.appendChild(newsTitleCollapse);
        newsTitleCollapse.classList.add('newstext');
        newsTitleCollapse.setAttribute('data-toggle', 'collapse');
        newsTitleCollapse.setAttribute('href', '#collapse2');
        newsContainerHeadingGroup.appendChild(newsBodyCollapseGroup);
        newsBodyCollapseGroup.id = 'collapse2';
        newsBodyCollapseGroup.classList.add('panel-collapse', 'collapse');
        newsBodyCollapseGroup.appendChild(newsBody);
        newsBody.classList.add('panel-body');
        newsBody.appendChild(newsBodyText);
        newsColumnContainer.appendChild(newsTimeIconText);
        newsTimeIconText.classList.add('newspost-icon');
        newsTimeIconText.appendChild(newsTimeIcon);
        newsTimeIconText.appendChild(newsTime);
        newsTimeIcon.classList.add('fa', 'fa-clock-o');
        newsTime.textContent = " " + date.toDateString();
        newsColumnContainer.appendChild(newsTimeIconUnderline);

        documentFragment.appendChild(newsColumnContainer);
        newsColumn.appendChild(documentFragment);
    }
};

newsApp.createNewsColumn();
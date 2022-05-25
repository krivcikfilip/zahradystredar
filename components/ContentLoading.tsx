import React from "react";
import ContentLoader from "react-content-loader";

/**
 * Content loading component
 */
const ContentLoading = () => {
    return (
        <div className="content-loading">
            <ContentLoader
                speed={2}
                width="100%"
                height={200}
                backgroundColor="#f8f8f8"
                foregroundColor="#e6e6e6"
            >
                <rect x="0" y="0" width="100%" height="200" />
            </ContentLoader>
        </div>
    );
};

export default ContentLoading;

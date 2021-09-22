import BlogPostSummary from '../components/BlogPostSummary.jsx';

// Set up access to AWS DynamoDB
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: process.env.REACT_APP_AWS_REGION,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET,
    accessKeyId: process.env.REACT_APP_AWS_ID
}
AWS.config.update(configuration)
const ddbClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    ddbClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

function Blog({ match }) {
    if (!match.params.slug) {
        return (
            <div className="section flex-col">
                <p className="title-1">Recent Blog Posts</p>
                <BlogPostSummary />
                <BlogPostSummary />
                <BlogPostSummary />
                <BlogPostSummary />
                <BlogPostSummary />
                <BlogPostSummary />
            </div>
    )}
    else {
        return (
            <p className="title-1">TODO</p>
    )}
}

export default Blog;

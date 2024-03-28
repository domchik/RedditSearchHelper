const axios = require('axios');
const sanitizeHtml = require('sanitize-html');
const utils = require('./utils');

jest.mock('axios');
jest.mock('sanitize-html');


describe('fetchRedditData', () => {
    it('should fetch and transform Reddit data', async () => {
        axios.get.mockResolvedValue({
            data: {
                "kind": "Listing",
                "data": {
                    "modhash": "h18vx5i23k342495b176443e22b979e5b662a5d73ceab8ad0e",
                    "dist": 25,
                    "facets": {

                    },
                    "after": "t3_1boutuo",
                    "geo_filter": "",
                    "children": [
                        {
                            "kind": "t3",
                            "data": {
                                "approved_at_utc": null,
                                "subreddit": "fantanoforever",
                                "selftext": "The bands typically referred to as the big 4 of thrash metal are Metallica, Megadeth, Slayer, and Anthrax.\n\nOne might also make a case for the big 4 of grunge: Nirvana, Pearl Jam, Alice in Chains, Soundgarden.\n\nWhat about other genres? Which quartet of bands would be the \"big 4\" of some other genre?\n\nI'll go first:\n\n**Synth-pop:** Depeche Mode, Duran Duran, Eurythmics, Tears for Fears.\n\n**Post-grunge:** Foo Fighters, Live, Bush, Silverchair.\n\n**British invasion:** the Beatles, the Rolling Stones, the Who, the Kinks.\n\n**Britpop:** Oasis, Blur, Pulp, Suede.",
                                "author_fullname": "t2_5b7qgw1u",
                                "saved": false,
                                "mod_reason_title": null,
                                "gilded": 0,
                                "clicked": false,
                                "title": "What are the \"Big 4\" of other genres?",
                                "link_flair_richtext": [

                                ],
                                "subreddit_name_prefixed": "r/fantanoforever",
                                "hidden": false,
                                "pwls": 6,
                                "link_flair_css_class": null,
                                "downs": 0,
                                "thumbnail_height": null,
                                "top_awarded_type": null,
                                "hide_score": true,
                                "name": "t3_1bp37v1",
                                "quarantine": false,
                                "link_flair_text_color": "dark",
                                "upvote_ratio": 1,
                                "author_flair_background_color": null,
                                "subreddit_type": "public",
                                "ups": 1,
                                "total_awards_received": 0,
                                "media_embed": {

                                },
                                "thumbnail_width": null,
                                "author_flair_template_id": null,
                                "is_original_content": false,
                                "user_reports": [

                                ],
                                "secure_media": null,
                                "is_reddit_media_domain": false,
                                "is_meta": false,
                                "category": null,
                                "secure_media_embed": {

                                },
                                "link_flair_text": null,
                                "can_mod_post": false,
                                "score": 1,
                                "approved_by": null,
                                "is_created_from_ads_ui": false,
                                "author_premium": false,
                                "thumbnail": "self",
                                "edited": false,
                                "author_flair_css_class": null,
                                "author_flair_richtext": [

                                ],
                                "gildings": {

                                },
                                "content_categories": null,
                                "is_self": true,
                                "mod_note": null,
                                "created": 1711549670,
                                "link_flair_type": "text",
                                "wls": 6,
                                "removed_by_category": null,
                                "banned_by": null,
                                "author_flair_type": "text",
                                "domain": "self.fantanoforever",
                                "allow_live_comments": false,
                                "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;The bands typically referred to as the big 4 of thrash metal are Metallica, Megadeth, Slayer, and Anthrax.&lt;/p&gt;\n\n&lt;p&gt;One might also make a case for the big 4 of grunge: Nirvana, Pearl Jam, Alice in Chains, Soundgarden.&lt;/p&gt;\n\n&lt;p&gt;What about other genres? Which quartet of bands would be the &amp;quot;big 4&amp;quot; of some other genre?&lt;/p&gt;\n\n&lt;p&gt;I&amp;#39;ll go first:&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Synth-pop:&lt;/strong&gt; Depeche Mode, Duran Duran, Eurythmics, Tears for Fears.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Post-grunge:&lt;/strong&gt; Foo Fighters, Live, Bush, Silverchair.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;British invasion:&lt;/strong&gt; the Beatles, the Rolling Stones, the Who, the Kinks.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Britpop:&lt;/strong&gt; Oasis, Blur, Pulp, Suede.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                                "likes": null,
                                "suggested_sort": null,
                                "banned_at_utc": null,
                                "view_count": null,
                                "archived": false,
                                "no_follow": true,
                                "is_crosspostable": true,
                                "pinned": false,
                                "over_18": false,
                                "all_awardings": [

                                ],
                                "awarders": [

                                ],
                                "media_only": false,
                                "can_gild": false,
                                "spoiler": false,
                                "locked": false,
                                "author_flair_text": null,
                                "treatment_tags": [

                                ],
                                "visited": false,
                                "removed_by": null,
                                "num_reports": null,
                                "distinguished": null,
                                "subreddit_id": "t5_310jd",
                                "author_is_blocked": false,
                                "mod_reason_by": null,
                                "removal_reason": null,
                                "link_flair_background_color": "",
                                "id": "1bp37v1",
                                "is_robot_indexable": true,
                                "report_reasons": null,
                                "author": "Ok-Impress-2222",
                                "discussion_type": null,
                                "num_comments": 0,
                                "send_replies": true,
                                "whitelist_status": "all_ads",
                                "contest_mode": false,
                                "mod_reports": [

                                ],
                                "author_patreon_flair": false,
                                "author_flair_text_color": null,
                                "permalink": "/r/fantanoforever/comments/1bp37v1/what_are_the_big_4_of_other_genres/",
                                "parent_whitelist_status": "all_ads",
                                "stickied": false,
                                "url": "https://www.reddit.com/r/fantanoforever/comments/1bp37v1/what_are_the_big_4_of_other_genres/",
                                "subreddit_subscribers": 159423,
                                "created_utc": 1711549670,
                                "num_crossposts": 0,
                                "media": null,
                                "is_video": false
                            }
                        },
                        {
                            "kind": "t3",
                            "data": {
                                "approved_at_utc": null,
                                "subreddit": "fantanoforever",
                                "selftext": "The bands typically referred to as the big 4 of thrash metal are Metallica, Megadeth, Slayer, and Anthrax.\n\nOne might also make a case for the big 4 of grunge: Nirvana, Pearl Jam, Alice in Chains, Soundgarden.\n\nWhat about other genres? Which quartet of bands would be the \"big 4\" of some other genre?\n\nI'll go first:\n\n**Synth-pop:** Depeche Mode, Duran Duran, Eurythmics, Tears for Fears.\n\n**Post-grunge:** Foo Fighters, Live, Bush, Silverchair.\n\n**British invasion:** the Beatles, the Rolling Stones, the Who, the Kinks.\n\n**Britpop:** Oasis, Blur, Pulp, Suede.",
                                "author_fullname": "t2_5b7qgw1u",
                                "saved": false,
                                "mod_reason_title": null,
                                "gilded": 0,
                                "clicked": false,
                                "title": "What are the \"Big 4\" of other genres?",
                                "link_flair_richtext": [

                                ],
                                "subreddit_name_prefixed": "r/fantanoforever",
                                "hidden": false,
                                "pwls": 6,
                                "link_flair_css_class": null,
                                "downs": 0,
                                "thumbnail_height": null,
                                "top_awarded_type": null,
                                "hide_score": true,
                                "name": "t3_1bp37v1",
                                "quarantine": false,
                                "link_flair_text_color": "dark",
                                "upvote_ratio": 1,
                                "author_flair_background_color": null,
                                "subreddit_type": "public",
                                "ups": 1,
                                "total_awards_received": 0,
                                "media_embed": {

                                },
                                "thumbnail_width": null,
                                "author_flair_template_id": null,
                                "is_original_content": false,
                                "user_reports": [

                                ],
                                "secure_media": null,
                                "is_reddit_media_domain": false,
                                "is_meta": false,
                                "category": null,
                                "secure_media_embed": {

                                },
                                "link_flair_text": null,
                                "can_mod_post": false,
                                "score": 1,
                                "approved_by": null,
                                "is_created_from_ads_ui": false,
                                "author_premium": false,
                                "thumbnail": "self",
                                "edited": false,
                                "author_flair_css_class": null,
                                "author_flair_richtext": [

                                ],
                                "gildings": {

                                },
                                "content_categories": null,
                                "is_self": true,
                                "mod_note": null,
                                "created": 1711549670,
                                "link_flair_type": "text",
                                "wls": 6,
                                "removed_by_category": null,
                                "banned_by": null,
                                "author_flair_type": "text",
                                "domain": "self.fantanoforever",
                                "allow_live_comments": false,
                                "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;The bands typically referred to as the big 4 of thrash metal are Metallica, Megadeth, Slayer, and Anthrax.&lt;/p&gt;\n\n&lt;p&gt;One might also make a case for the big 4 of grunge: Nirvana, Pearl Jam, Alice in Chains, Soundgarden.&lt;/p&gt;\n\n&lt;p&gt;What about other genres? Which quartet of bands would be the &amp;quot;big 4&amp;quot; of some other genre?&lt;/p&gt;\n\n&lt;p&gt;I&amp;#39;ll go first:&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Synth-pop:&lt;/strong&gt; Depeche Mode, Duran Duran, Eurythmics, Tears for Fears.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Post-grunge:&lt;/strong&gt; Foo Fighters, Live, Bush, Silverchair.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;British invasion:&lt;/strong&gt; the Beatles, the Rolling Stones, the Who, the Kinks.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Britpop:&lt;/strong&gt; Oasis, Blur, Pulp, Suede.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                                "likes": null,
                                "suggested_sort": null,
                                "banned_at_utc": null,
                                "view_count": null,
                                "archived": false,
                                "no_follow": true,
                                "is_crosspostable": true,
                                "pinned": false,
                                "over_18": false,
                                "all_awardings": [

                                ],
                                "awarders": [

                                ],
                                "media_only": false,
                                "can_gild": false,
                                "spoiler": false,
                                "locked": false,
                                "author_flair_text": null,
                                "treatment_tags": [

                                ],
                                "visited": false,
                                "removed_by": null,
                                "num_reports": null,
                                "distinguished": null,
                                "subreddit_id": "t5_310jd",
                                "author_is_blocked": false,
                                "mod_reason_by": null,
                                "removal_reason": null,
                                "link_flair_background_color": "",
                                "id": "1bp37v1",
                                "is_robot_indexable": true,
                                "report_reasons": null,
                                "author": "Ok-Impress-2222",
                                "discussion_type": null,
                                "num_comments": 0,
                                "send_replies": true,
                                "whitelist_status": "all_ads",
                                "contest_mode": false,
                                "mod_reports": [

                                ],
                                "author_patreon_flair": false,
                                "author_flair_text_color": null,
                                "permalink": "/r/fantanoforever/comments/1bp37v1/what_are_the_big_4_of_other_genres/",
                                "parent_whitelist_status": "all_ads",
                                "stickied": false,
                                "url": "https://www.reddit.com/r/fantanoforever/comments/1bp37v1/what_are_the_big_4_of_other_genres/",
                                "subreddit_subscribers": 159423,
                                "created_utc": 1711549670,
                                "num_crossposts": 0,
                                "media": null,
                                "is_video": false
                            }
                        },

                    ],
                    "before": null
                }
            }
        });

        sanitizeHtml.mockImplementation((text) => text);
        const result = await utils.fetchRedditData('test query');

        expect(axios.get).toHaveBeenCalledWith('https://www.reddit.com/search.json?q=test query&sort=new');
        expect(result).toHaveLength(2);
        expect(result[0].id).toEqual('1bp37v1');
    });
});


describe('extractValidImageUrl', () => {
    it('should return thumbnail URL if valid', () => {
        const post = {
            data: {
                thumbnail: 'http://image_thumbnail.jpg'
            }
        };
        const result = utils.extractValidImageUrl(post);
        expect(result).toBe('http://image_thumbnail.jpg');
    });

});

describe('isValidImageUrl', () => {
    it('should return true for valid image URLs', () => {
        expect(utils.isValidImageUrl('https://image.com/image.png')).toBe(true);
        expect(utils.isValidImageUrl('https://image.com/image.JPEG')).toBe(true);
    });

});

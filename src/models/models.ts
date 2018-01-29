export interface Post {
    abs_rshares?: number;
    active?: Date;
    active_votes?: {
        percent?: number;
        reputation?: number;
        rshares?: number;
        time?: Date;
        voter?: string;
        weight?: number;
    };
    allow_curation_rewards?: boolean;
    allow_replies?: boolean;
    allow_votes?: boolean;
    author?: string;
    author_reputation?: number;
    author_rewards?: number;
    beneficiaries?: Array<any>;
    body?: string;
    body_length?: number;
    cashout_time?: Date;
    category?: string;
    children?: number;
    children_abs_rshares?: number;
    created?: Date;
    curator_payout_value?: string;
    depth?: number;
    first_reblogged_by?: string;
    first_reblogged_on?: Date;
    id?: number;
    json_metadata?: {
        app?: string;
        created?: string;
        format?: string;
        image?: Array<string>;
        tags?: Array<string>;
        users?: Array<string>;  
    };
    last_payout?: Date;
    last_update?: Date;
    max_accepted_payout?: string;
    max_cashout_time?: Date;
    net_rshares?: string;
    net_votes?: number;
    parent_author?: string;
    parent_permlink?: string;
    pending_payout_value?: string;
    pending_steem_dollars?: number;
    permlink?: string;
    promoted?: string;
    reblogged_by?: Array<string>;
    replies?: Array<string>;
    reward_weight?: number;
    root_comment?: number;
    root_title?: string;
    title?: string;
    total_payout_value?: string;
    total_pending_payout_value?: string;
    total_vote_weigth?: number;
    url?: string;
    vote_rshares?: string;
};

export interface steemConnect {
    userId?: number;
    isAuthenticated?: boolean;
    username?: string;
    permissions?: Array<string>;
    token?: Array<string>;
};

// Broadcast

export interface Vote {
    voter?: string;
    author?: string;
    permlink?: string;
    weight?: number;
};

export interface Comment {
    parentAuthor?: string;
    parentPermlink?: string;
    author?: string;
    permlink?: string;
    title?: string;
    body?: string;
    jsonMetadata?: {
        app?: string;
        created?: string;
        format?: string;
        image?: Array<string>;
        tags?: Array<string>;
        users?: Array<string>;  
    }
};

export interface deleteComment {
    author?: string;
    permlink?: string;
};

export interface Follow {
    follower?: string; 
    following?: string;
};

export interface Ignore {
    follower?: string;
    following?: string;
};

export interface Reblog {
    account?: string;
    author?: string;
    permlink?: string;
};
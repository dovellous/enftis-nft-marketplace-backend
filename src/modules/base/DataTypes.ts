import { PostgrestError } from "@supabase/supabase-js"

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface IDatabase {
  public: {
    Tables: {
      tbl____MODEL_ALL_UNDERSCORE_CASE____: {
        Row: {
          foo: any
          bar: boolean
          ____UUID_KEY____: string
          updateSource: string
          operationType: string
        },
        Insert: {
          foo: any
          bar?: boolean
          ____UUID_KEY____: string
          updateSource: string
          operationType: string
        },
        Update: {
          foo?: any
          bar?: boolean
          ____UUID_KEY____: string
          updateSource: string
          operationType: string
        }
        
      }
      tbl_auction_items: {
        Row: {
          _id: string | null
          auction_item_created_at: string
          auction_item_expires: string | null
          auction_item_highest_amount: number | null
          auction_item_id: number
          auction_item_ighest_bidder: string | null
          auction_item_lowest_amount: number | null
          auction_item_updated_at: string | null
          auction_type_id: number | null
          fid: string | null
          market_item_id: number | null
        }
        Insert: {
          _id?: string | null
          auction_item_created_at?: string
          auction_item_expires?: string | null
          auction_item_highest_amount?: number | null
          auction_item_id?: number
          auction_item_ighest_bidder?: string | null
          auction_item_lowest_amount?: number | null
          auction_item_updated_at?: string | null
          auction_type_id?: number | null
          fid?: string | null
          market_item_id?: number | null
        }
        Update: {
          _id?: string | null
          auction_item_created_at?: string
          auction_item_expires?: string | null
          auction_item_highest_amount?: number | null
          auction_item_id?: number
          auction_item_ighest_bidder?: string | null
          auction_item_lowest_amount?: number | null
          auction_item_updated_at?: string | null
          auction_type_id?: number | null
          fid?: string | null
          market_item_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_auction_items_auction_type_id_fkey"
            columns: ["auction_type_id"]
            referencedRelation: "tbl_auction_types"
            referencedColumns: ["auction_type_id"]
          },
          {
            foreignKeyName: "tbl_auction_items_market_item_id_fkey"
            columns: ["market_item_id"]
            referencedRelation: "tbl_market_items"
            referencedColumns: ["market_item_id"]
          }
        ]
      }
      tbl_auction_types: {
        Row: {
          _id: string | null
          auction_type: string
          auction_type_description: string | null
          auction_type_id: number
          fid: string | null
        }
        Insert: {
          _id?: string | null
          auction_type: string
          auction_type_description?: string | null
          auction_type_id?: number
          fid?: string | null
        }
        Update: {
          _id?: string | null
          auction_type?: string
          auction_type_description?: string | null
          auction_type_id?: number
          fid?: string | null
        }
        Relationships: []
      }
      tbl_authors: {
        Row: {
          _id: string | null
          author_created_at: string
          author_id: number
          author_is_active: boolean | null
          author_is_verified: boolean | null
          author_rating: number | null
          author_sold_items: number | null
          author_sold_value: Json | null
          author_updated_at: string | null
          author_uuid: string | null
          category_id: number | null
          fid: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          author_created_at?: string
          author_id?: number
          author_is_active?: boolean | null
          author_is_verified?: boolean | null
          author_rating?: number | null
          author_sold_items?: number | null
          author_sold_value?: Json | null
          author_updated_at?: string | null
          author_uuid?: string | null
          category_id?: number | null
          fid?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          author_created_at?: string
          author_id?: number
          author_is_active?: boolean | null
          author_is_verified?: boolean | null
          author_rating?: number | null
          author_sold_items?: number | null
          author_sold_value?: Json | null
          author_updated_at?: string | null
          author_uuid?: string | null
          category_id?: number | null
          fid?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_authors_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "tbl_categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "tbl_authors_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_bid_status: {
        Row: {
          _id: string | null
          bid_status_id: number
          bid_status_name: string
          fid: string | null
        }
        Insert: {
          _id?: string | null
          bid_status_id?: number
          bid_status_name: string
          fid?: string | null
        }
        Update: {
          _id?: string | null
          bid_status_id?: number
          bid_status_name?: string
          fid?: string | null
        }
        Relationships: []
      }
      tbl_bid_types: {
        Row: {
          _id: string | null
          bid_type: string
          bid_type_description: string | null
          bid_type_id: number
          fid: string | null
        }
        Insert: {
          _id?: string | null
          bid_type: string
          bid_type_description?: string | null
          bid_type_id?: number
          fid?: string | null
        }
        Update: {
          _id?: string | null
          bid_type?: string
          bid_type_description?: string | null
          bid_type_id?: number
          fid?: string | null
        }
        Relationships: []
      }
      tbl_bids: {
        Row: {
          _id: string | null
          auction_item_id: number | null
          bid_amount: number | null
          bid_created_at: string
          bid_id: number
          bid_status: number | null
          bid_type: number | null
          bid_updated_at: string | null
          bid_uuid: string | null
          fid: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          auction_item_id?: number | null
          bid_amount?: number | null
          bid_created_at?: string
          bid_id?: number
          bid_status?: number | null
          bid_type?: number | null
          bid_updated_at?: string | null
          bid_uuid?: string | null
          fid?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          auction_item_id?: number | null
          bid_amount?: number | null
          bid_created_at?: string
          bid_id?: number
          bid_status?: number | null
          bid_type?: number | null
          bid_updated_at?: string | null
          bid_uuid?: string | null
          fid?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_bids_auction_item_id_fkey"
            columns: ["auction_item_id"]
            referencedRelation: "tbl_auction_items"
            referencedColumns: ["auction_item_id"]
          },
          {
            foreignKeyName: "tbl_bids_bid_status_fkey"
            columns: ["bid_status"]
            referencedRelation: "tbl_bid_status"
            referencedColumns: ["bid_status_id"]
          },
          {
            foreignKeyName: "tbl_bids_bid_type_fkey"
            columns: ["bid_type"]
            referencedRelation: "tbl_bid_types"
            referencedColumns: ["bid_type_id"]
          },
          {
            foreignKeyName: "tbl_bids_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_bonuses: {
        Row: {
          _id: string | null
          bonus_created_at: string
          bonus_fb: number | null
          bonus_id: number
          bonus_ig: number | null
          bonus_in: number | null
          bonus_md: number | null
          bonus_tg: number | null
          bonus_tt: number | null
          bonus_updated_at: string | null
          bonus_uuid: string | null
          bonus_wa: number | null
          bonus_x: number | null
          bonus_yt: number | null
          fid: string | null
          user_id: number | null
          verify_email: number | null
          verify_id: number | null
          verify_phone: number | null
          verify_residence: number | null
        }
        Insert: {
          _id?: string | null
          bonus_created_at?: string
          bonus_fb?: number | null
          bonus_id?: number
          bonus_ig?: number | null
          bonus_in?: number | null
          bonus_md?: number | null
          bonus_tg?: number | null
          bonus_tt?: number | null
          bonus_updated_at?: string | null
          bonus_uuid?: string | null
          bonus_wa?: number | null
          bonus_x?: number | null
          bonus_yt?: number | null
          fid?: string | null
          user_id?: number | null
          verify_email?: number | null
          verify_id?: number | null
          verify_phone?: number | null
          verify_residence?: number | null
        }
        Update: {
          _id?: string | null
          bonus_created_at?: string
          bonus_fb?: number | null
          bonus_id?: number
          bonus_ig?: number | null
          bonus_in?: number | null
          bonus_md?: number | null
          bonus_tg?: number | null
          bonus_tt?: number | null
          bonus_updated_at?: string | null
          bonus_uuid?: string | null
          bonus_wa?: number | null
          bonus_x?: number | null
          bonus_yt?: number | null
          fid?: string | null
          user_id?: number | null
          verify_email?: number | null
          verify_id?: number | null
          verify_phone?: number | null
          verify_residence?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_bonuses_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_categories: {
        Row: {
          _id: string | null
          category_created_at: string
          category_icon: string | null
          category_id: number
          category_is_active: boolean | null
          category_name: string | null
          category_parent_id: number | null
          category_slug: string | null
          category_updated_at: string | null
          category_uuid: string | null
          fid: string | null
        }
        Insert: {
          _id?: string | null
          category_created_at?: string
          category_icon?: string | null
          category_id?: number
          category_is_active?: boolean | null
          category_name?: string | null
          category_parent_id?: number | null
          category_slug?: string | null
          category_updated_at?: string | null
          category_uuid?: string | null
          fid?: string | null
        }
        Update: {
          _id?: string | null
          category_created_at?: string
          category_icon?: string | null
          category_id?: number
          category_is_active?: boolean | null
          category_name?: string | null
          category_parent_id?: number | null
          category_slug?: string | null
          category_updated_at?: string | null
          category_uuid?: string | null
          fid?: string | null
        }
        Relationships: []
      }
      tbl_clients: {
        Row: {
          _id: string | null
          client_device_created_at: string
          client_device_id: string | null
          client_device_meta: Json | null
          client_device_name: string | null
          client_device_pub_key: string | null
          client_device_secret: string | null
          client_device_updated_at: string | null
          client_device_uuid: string | null
          client_id: number
          fid: string | null
          service_device_pub_key: string | null
        }
        Insert: {
          _id?: string | null
          client_device_created_at?: string
          client_device_id?: string | null
          client_device_meta?: Json | null
          client_device_name?: string | null
          client_device_pub_key?: string | null
          client_device_secret?: string | null
          client_device_updated_at?: string | null
          client_device_uuid?: string | null
          client_id?: number
          fid?: string | null
          service_device_pub_key?: string | null
        }
        Update: {
          _id?: string | null
          client_device_created_at?: string
          client_device_id?: string | null
          client_device_meta?: Json | null
          client_device_name?: string | null
          client_device_pub_key?: string | null
          client_device_secret?: string | null
          client_device_updated_at?: string | null
          client_device_uuid?: string | null
          client_id?: number
          fid?: string | null
          service_device_pub_key?: string | null
        }
        Relationships: []
      }
      tbl_collections: {
        Row: {
          _id: string | null
          category_id: number | null
          collection_banner: string | null
          collection_created_at: string
          collection_description: string | null
          collection_id: number
          collection_name: string | null
          collection_thumbnail: string | null
          collection_updated_at: string | null
          collection_uuid: string | null
          fid: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          category_id?: number | null
          collection_banner?: string | null
          collection_created_at?: string
          collection_description?: string | null
          collection_id?: number
          collection_name?: string | null
          collection_thumbnail?: string | null
          collection_updated_at?: string | null
          collection_uuid?: string | null
          fid?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          category_id?: number | null
          collection_banner?: string | null
          collection_created_at?: string
          collection_description?: string | null
          collection_id?: number
          collection_name?: string | null
          collection_thumbnail?: string | null
          collection_updated_at?: string | null
          collection_uuid?: string | null
          fid?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      tbl_engagement: {
        Row: {
          _id: string | null
          engagement_claimed_off_days: number | null
          engagement_consecutive_days: number | null
          engagement_created_at: string
          engagement_id: number
          engagement_off_days: number | null
          engagement_updated_at: string | null
          engagement_uuid: string | null
          fid: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          engagement_claimed_off_days?: number | null
          engagement_consecutive_days?: number | null
          engagement_created_at?: string
          engagement_id?: number
          engagement_off_days?: number | null
          engagement_updated_at?: string | null
          engagement_uuid?: string | null
          fid?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          engagement_claimed_off_days?: number | null
          engagement_consecutive_days?: number | null
          engagement_created_at?: string
          engagement_id?: number
          engagement_off_days?: number | null
          engagement_updated_at?: string | null
          engagement_uuid?: string | null
          fid?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_engagement_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_favourite_collections: {
        Row: {
          _id: string | null
          collection_id: number
          favourite_collection_created_at: string
          favourite_collection_id: number
          favourite_collection_updated_at: string | null
          favourite_collection_uuid: string
          fid: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          collection_id?: number
          favourite_collection_created_at?: string
          favourite_collection_id?: number
          favourite_collection_updated_at?: string | null
          favourite_collection_uuid?: string
          fid?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          collection_id?: number
          favourite_collection_created_at?: string
          favourite_collection_id?: number
          favourite_collection_updated_at?: string | null
          favourite_collection_uuid?: string
          fid?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_favourite_collections_collection_id_fkey"
            columns: ["collection_id"]
            referencedRelation: "tbl_collections"
            referencedColumns: ["collection_id"]
          },
          {
            foreignKeyName: "tbl_favourite_collections_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_invite_links: {
        Row: {
          _id: string | null
          fid: string | null
          link: string | null
          link_created_at: string
          link_expires: string | null
          link_id: number
          link_updated_at: string | null
          link_uuid: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          fid?: string | null
          link?: string | null
          link_created_at?: string
          link_expires?: string | null
          link_id?: number
          link_updated_at?: string | null
          link_uuid?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          fid?: string | null
          link?: string | null
          link_created_at?: string
          link_expires?: string | null
          link_id?: number
          link_updated_at?: string | null
          link_uuid?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_invite_links_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_invite_users: {
        Row: {
          _id: string | null
          fid: string | null
          invite_created_at: string
          invite_from: number | null
          invite_id: number
          invite_reward: number | null
          invite_to: number | null
          invite_updated_at: string | null
          invite_uuid: string | null
          link_id: number | null
        }
        Insert: {
          _id?: string | null
          fid?: string | null
          invite_created_at?: string
          invite_from?: number | null
          invite_id?: number
          invite_reward?: number | null
          invite_to?: number | null
          invite_updated_at?: string | null
          invite_uuid?: string | null
          link_id?: number | null
        }
        Update: {
          _id?: string | null
          fid?: string | null
          invite_created_at?: string
          invite_from?: number | null
          invite_id?: number
          invite_reward?: number | null
          invite_to?: number | null
          invite_updated_at?: string | null
          invite_uuid?: string | null
          link_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_invite_users_invite_from_fkey"
            columns: ["invite_from"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tbl_invite_users_invite_to_fkey"
            columns: ["invite_to"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tbl_invite_users_link_id_fkey"
            columns: ["link_id"]
            referencedRelation: "tbl_invite_links"
            referencedColumns: ["link_id"]
          }
        ]
      }
      tbl_login_sessions: {
        Row: {
          _id: string | null
          client_id: number | null
          fid: string | null
          session_created_at: string
          session_ended_at: string | null
          session_id: number
          session_updated_at: string | null
          session_uuid: string | null
          socket_io: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          client_id?: number | null
          fid?: string | null
          session_created_at?: string
          session_ended_at?: string | null
          session_id?: number
          session_updated_at?: string | null
          session_uuid?: string | null
          socket_io?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          client_id?: number | null
          fid?: string | null
          session_created_at?: string
          session_ended_at?: string | null
          session_id?: number
          session_updated_at?: string | null
          session_uuid?: string | null
          socket_io?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_login_sessions_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "tbl_clients"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "tbl_login_sessions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_market_items: {
        Row: {
          _id: string | null
          auction_item_id: number | null
          category_id: number | null
          chain_id: number | null
          fid: string | null
          is_archived: boolean | null
          is_auction: boolean | null
          is_listed: boolean | null
          is_sold: boolean | null
          likes_count: number | null
          market_item_created_at: string
          market_item_featured: boolean | null
          market_item_id: number
          market_item_tags: string[] | null
          market_item_updated_at: string | null
          market_item_uuid: string | null
          market_item_verified: boolean | null
          on_chain: boolean | null
          platform_fee_paid: number | null
          supports_royalties: boolean | null
          token_contract_address: string | null
          token_creator: string | null
          token_currency: string | null
          token_id: number | null
          token_index_id: number | null
          token_interface_id: string | null
          token_owner: string | null
          token_price: number | null
          token_seller: string | null
          user_id: number | null
          views_count: number | null
        }
        Insert: {
          _id?: string | null
          auction_item_id?: number | null
          category_id?: number | null
          chain_id?: number | null
          fid?: string | null
          is_archived?: boolean | null
          is_auction?: boolean | null
          is_listed?: boolean | null
          is_sold?: boolean | null
          likes_count?: number | null
          market_item_created_at?: string
          market_item_featured?: boolean | null
          market_item_id?: number
          market_item_tags?: string[] | null
          market_item_updated_at?: string | null
          market_item_uuid?: string | null
          market_item_verified?: boolean | null
          on_chain?: boolean | null
          platform_fee_paid?: number | null
          supports_royalties?: boolean | null
          token_contract_address?: string | null
          token_creator?: string | null
          token_currency?: string | null
          token_id?: number | null
          token_index_id?: number | null
          token_interface_id?: string | null
          token_owner?: string | null
          token_price?: number | null
          token_seller?: string | null
          user_id?: number | null
          views_count?: number | null
        }
        Update: {
          _id?: string | null
          auction_item_id?: number | null
          category_id?: number | null
          chain_id?: number | null
          fid?: string | null
          is_archived?: boolean | null
          is_auction?: boolean | null
          is_listed?: boolean | null
          is_sold?: boolean | null
          likes_count?: number | null
          market_item_created_at?: string
          market_item_featured?: boolean | null
          market_item_id?: number
          market_item_tags?: string[] | null
          market_item_updated_at?: string | null
          market_item_uuid?: string | null
          market_item_verified?: boolean | null
          on_chain?: boolean | null
          platform_fee_paid?: number | null
          supports_royalties?: boolean | null
          token_contract_address?: string | null
          token_creator?: string | null
          token_currency?: string | null
          token_id?: number | null
          token_index_id?: number | null
          token_interface_id?: string | null
          token_owner?: string | null
          token_price?: number | null
          token_seller?: string | null
          user_id?: number | null
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_market_items_auction_item_id_fkey"
            columns: ["auction_item_id"]
            referencedRelation: "tbl_auction_items"
            referencedColumns: ["auction_item_id"]
          },
          {
            foreignKeyName: "tbl_market_items_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "tbl_categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "tbl_market_items_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_mining_sessions: {
        Row: {
          _id: string | null
          client_id: number | null
          fid: string | null
          mining_base_rate: number | null
          mining_booster: number | null
          mining_chain_id: number | null
          mining_claim_hash: string | null
          mining_claimed: boolean | null
          mining_ended_at: string | null
          mining_id: number
          mining_rate: number | null
          mining_started_at: string
          mining_uuid: string | null
          mining_wallet_address: string | null
          session_id: number | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          client_id?: number | null
          fid?: string | null
          mining_base_rate?: number | null
          mining_booster?: number | null
          mining_chain_id?: number | null
          mining_claim_hash?: string | null
          mining_claimed?: boolean | null
          mining_ended_at?: string | null
          mining_id?: number
          mining_rate?: number | null
          mining_started_at?: string
          mining_uuid?: string | null
          mining_wallet_address?: string | null
          session_id?: number | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          client_id?: number | null
          fid?: string | null
          mining_base_rate?: number | null
          mining_booster?: number | null
          mining_chain_id?: number | null
          mining_claim_hash?: string | null
          mining_claimed?: boolean | null
          mining_ended_at?: string | null
          mining_id?: number
          mining_rate?: number | null
          mining_started_at?: string
          mining_uuid?: string | null
          mining_wallet_address?: string | null
          session_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_mining_sessions_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "tbl_clients"
            referencedColumns: ["client_id"]
          },
          {
            foreignKeyName: "tbl_mining_sessions_session_id_fkey"
            columns: ["session_id"]
            referencedRelation: "tbl_login_sessions"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "tbl_mining_sessions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_nft_logs: {
        Row: {
          _id: string | null
          fid: string | null
          log_amount: number | null
          log_chain_id: number | null
          log_data: Json | null
          log_from: string | null
          log_id: number
          log_nft_created_at: string
          log_to: string | null
          log_txn_hash: string | null
          log_type: string | null
          log_uuid: string | null
          nft_id: number | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          fid?: string | null
          log_amount?: number | null
          log_chain_id?: number | null
          log_data?: Json | null
          log_from?: string | null
          log_id?: number
          log_nft_created_at?: string
          log_to?: string | null
          log_txn_hash?: string | null
          log_type?: string | null
          log_uuid?: string | null
          nft_id?: number | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          fid?: string | null
          log_amount?: number | null
          log_chain_id?: number | null
          log_data?: Json | null
          log_from?: string | null
          log_id?: number
          log_nft_created_at?: string
          log_to?: string | null
          log_txn_hash?: string | null
          log_type?: string | null
          log_uuid?: string | null
          nft_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_nft_logs_nft_id_fkey"
            columns: ["nft_id"]
            referencedRelation: "tbl_nfts"
            referencedColumns: ["nft_id"]
          },
          {
            foreignKeyName: "tbl_nft_logs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_nft_ranking: {
        Row: {
          _id: string | null
          author_id: number | null
          collection_id: number | null
          fid: string | null
          nft_id: number | null
          nft_rank: number | null
          nft_ranking_created_at: string
          nft_ranking_d14d: number | null
          nft_ranking_d21d: number | null
          nft_ranking_d24hr: number | null
          nft_ranking_d28: number | null
          nft_ranking_d7d: number | null
          nft_ranking_floor_price: number | null
          nft_ranking_id: number
          nft_ranking_items: number | null
          nft_ranking_owners: number | null
          nft_ranking_updated_at: number | null
          nft_ranking_uuid: string | null
          nft_ranking_volume: number | null
        }
        Insert: {
          _id?: string | null
          author_id?: number | null
          collection_id?: number | null
          fid?: string | null
          nft_id?: number | null
          nft_rank?: number | null
          nft_ranking_created_at?: string
          nft_ranking_d14d?: number | null
          nft_ranking_d21d?: number | null
          nft_ranking_d24hr?: number | null
          nft_ranking_d28?: number | null
          nft_ranking_d7d?: number | null
          nft_ranking_floor_price?: number | null
          nft_ranking_id?: number
          nft_ranking_items?: number | null
          nft_ranking_owners?: number | null
          nft_ranking_updated_at?: number | null
          nft_ranking_uuid?: string | null
          nft_ranking_volume?: number | null
        }
        Update: {
          _id?: string | null
          author_id?: number | null
          collection_id?: number | null
          fid?: string | null
          nft_id?: number | null
          nft_rank?: number | null
          nft_ranking_created_at?: string
          nft_ranking_d14d?: number | null
          nft_ranking_d21d?: number | null
          nft_ranking_d24hr?: number | null
          nft_ranking_d28?: number | null
          nft_ranking_d7d?: number | null
          nft_ranking_floor_price?: number | null
          nft_ranking_id?: number
          nft_ranking_items?: number | null
          nft_ranking_owners?: number | null
          nft_ranking_updated_at?: number | null
          nft_ranking_uuid?: string | null
          nft_ranking_volume?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_nft_ranking_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "tbl_authors"
            referencedColumns: ["author_id"]
          },
          {
            foreignKeyName: "tbl_nft_ranking_collection_id_fkey"
            columns: ["collection_id"]
            referencedRelation: "tbl_collections"
            referencedColumns: ["collection_id"]
          },
          {
            foreignKeyName: "tbl_nft_ranking_nft_id_fkey"
            columns: ["nft_id"]
            referencedRelation: "tbl_nfts"
            referencedColumns: ["nft_id"]
          }
        ]
      }
      tbl_nfts: {
        Row: {
          _id: string | null
          category_id: number | null
          fid: string | null
          nft_address: string | null
          nft_auction_meta: Json | null
          nft_chains: Json | null
          nft_collection_meta: Json | null
          nft_created_at: string
          nft_description: string | null
          nft_gallery: Json | null
          nft_hash: string | null
          nft_id: number
          nft_interface_id: string | null
          nft_interface_type: string | null
          nft_ipfs_id: string | null
          nft_is_auction: boolean | null
          nft_link: string | null
          nft_meta: Json | null
          nft_minted: boolean | null
          nft_name: string | null
          nft_preview: string | null
          nft_price: number | null
          nft_pricing: Json | null
          nft_properties: Json | null
          nft_royalty_amount: number | null
          nft_royalty_receiver: string | null
          nft_sensitive_content: boolean | null
          nft_supply: number | null
          nft_support_royalties: boolean | null
          nft_symbol: string | null
          nft_unlockable: boolean | null
          nft_updated_at: string | null
          nft_uuid: string | null
          token_creator: string | null
          token_id: number | null
          token_minter: string | null
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          category_id?: number | null
          fid?: string | null
          nft_address?: string | null
          nft_auction_meta?: Json | null
          nft_chains?: Json | null
          nft_collection_meta?: Json | null
          nft_created_at?: string
          nft_description?: string | null
          nft_gallery?: Json | null
          nft_hash?: string | null
          nft_id?: number
          nft_interface_id?: string | null
          nft_interface_type?: string | null
          nft_ipfs_id?: string | null
          nft_is_auction?: boolean | null
          nft_link?: string | null
          nft_meta?: Json | null
          nft_minted?: boolean | null
          nft_name?: string | null
          nft_preview?: string | null
          nft_price?: number | null
          nft_pricing?: Json | null
          nft_properties?: Json | null
          nft_royalty_amount?: number | null
          nft_royalty_receiver?: string | null
          nft_sensitive_content?: boolean | null
          nft_supply?: number | null
          nft_support_royalties?: boolean | null
          nft_symbol?: string | null
          nft_unlockable?: boolean | null
          nft_updated_at?: string | null
          nft_uuid?: string | null
          token_creator?: string | null
          token_id?: number | null
          token_minter?: string | null
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          category_id?: number | null
          fid?: string | null
          nft_address?: string | null
          nft_auction_meta?: Json | null
          nft_chains?: Json | null
          nft_collection_meta?: Json | null
          nft_created_at?: string
          nft_description?: string | null
          nft_gallery?: Json | null
          nft_hash?: string | null
          nft_id?: number
          nft_interface_id?: string | null
          nft_interface_type?: string | null
          nft_ipfs_id?: string | null
          nft_is_auction?: boolean | null
          nft_link?: string | null
          nft_meta?: Json | null
          nft_minted?: boolean | null
          nft_name?: string | null
          nft_preview?: string | null
          nft_price?: number | null
          nft_pricing?: Json | null
          nft_properties?: Json | null
          nft_royalty_amount?: number | null
          nft_royalty_receiver?: string | null
          nft_sensitive_content?: boolean | null
          nft_supply?: number | null
          nft_support_royalties?: boolean | null
          nft_symbol?: string | null
          nft_unlockable?: boolean | null
          nft_updated_at?: string | null
          nft_uuid?: string | null
          token_creator?: string | null
          token_id?: number | null
          token_minter?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_nfts_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "tbl_categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "tbl_nfts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_options: {
        Row: {
          _id: string | null
          fid: string | null
          option_created_at: string
          option_datatype: string | null
          option_id: number
          option_slug: string | null
          option_updated_at: string | null
          option_uuid: string | null
          option_value: string | null
        }
        Insert: {
          _id?: string | null
          fid?: string | null
          option_created_at?: string
          option_datatype?: string | null
          option_id?: number
          option_slug?: string | null
          option_updated_at?: string | null
          option_uuid?: string | null
          option_value?: string | null
        }
        Update: {
          _id?: string | null
          fid?: string | null
          option_created_at?: string
          option_datatype?: string | null
          option_id?: number
          option_slug?: string | null
          option_updated_at?: string | null
          option_uuid?: string | null
          option_value?: string | null
        }
        Relationships: []
      }
      tbl_user_collections: {
        Row: {
          _id: string | null
          collection_id: number
          fid: string | null
          user_collection_created_at: string
          user_collection_id: number
          user_collection_updated_at: string | null
          user_collection_uuid: string
          user_id: number | null
        }
        Insert: {
          _id?: string | null
          collection_id?: number
          fid?: string | null
          user_collection_created_at?: string
          user_collection_id?: number
          user_collection_updated_at?: string | null
          user_collection_uuid?: string
          user_id?: number | null
        }
        Update: {
          _id?: string | null
          collection_id?: number
          fid?: string | null
          user_collection_created_at?: string
          user_collection_id?: number
          user_collection_updated_at?: string | null
          user_collection_uuid?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_user_collections_collection_id_fkey"
            columns: ["collection_id"]
            referencedRelation: "tbl_collections"
            referencedColumns: ["collection_id"]
          },
          {
            foreignKeyName: "tbl_user_collections_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tbl_users: {
        Row: {
          _id: string | null
          email: string
          email_verified: boolean | null
          fid: string | null
          firebase_provider_data: Json | null
          first_name: string | null
          last_name: string | null
          organization_id: number | null
          password: string | null
          phone_number: string | null
          phone_number_verified: string | null
          photo_url: string | null
          socket_id: string | null
          supabase_provider: Json | null
          user_access_levels: Json | null
          user_country: string | null
          user_created_at: string
          user_default_role: string | null
          user_dob: string | null
          user_gender: string | null
          user_id: number
          user_is_active: boolean | null
          user_last_login: string | null
          user_last_seen: string | null
          user_updated_at: string | null
          user_uuid: string | null
          username: string | null
        }
        Insert: {
          _id?: string | null
          email: string
          email_verified?: boolean | null
          fid?: string | null
          firebase_provider_data?: Json | null
          first_name?: string | null
          last_name?: string | null
          organization_id?: number | null
          password?: string | null
          phone_number?: string | null
          phone_number_verified?: string | null
          photo_url?: string | null
          socket_id?: string | null
          supabase_provider?: Json | null
          user_access_levels?: Json | null
          user_country?: string | null
          user_created_at: string
          user_default_role?: string | null
          user_dob?: string | null
          user_gender?: string | null
          user_id?: number
          user_is_active?: boolean | null
          user_last_login?: string | null
          user_last_seen?: string | null
          user_updated_at?: string | null
          user_uuid?: string | null
          username?: string | null
        }
        Update: {
          _id?: string | null
          email?: string
          email_verified?: boolean | null
          fid?: string | null
          firebase_provider_data?: Json | null
          first_name?: string | null
          last_name?: string | null
          organization_id?: number | null
          password?: string | null
          phone_number?: string | null
          phone_number_verified?: string | null
          photo_url?: string | null
          socket_id?: string | null
          supabase_provider?: Json | null
          user_access_levels?: Json | null
          user_country?: string | null
          user_created_at?: string
          user_default_role?: string | null
          user_dob?: string | null
          user_gender?: string | null
          user_id?: number
          user_is_active?: boolean | null
          user_last_login?: string | null
          user_last_seen?: string | null
          user_updated_at?: string | null
          user_uuid?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type ITable<T extends keyof IDatabase['public']['Tables']> = {
  Row: IDatabase['public']['Tables'][T]['Row'];
  Insert: IDatabase['public']['Tables'][T]['Insert'];
  Update: IDatabase['public']['Tables'][T]['Update'];
};

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;

export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never;

export type DbResultErr = PostgrestError;


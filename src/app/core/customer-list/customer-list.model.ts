export class CustomerList {
  
   username: string ;
   first_name: string;
   last_name: string;
   email_address: string;
   date_of_birth?: number;
   preferred_language: string;
   fiat_currency_id: number;
   fiat_currency_code: string;
   in_app_notifications?: boolean;
   app_screenshots?: boolean;
   kyc_level_number: number;
   kyc_level_name : string;
   loyalty_level: string;
   country_id: number;
   country_code: string;
   country_name_en: string;
   country_name_fr: string;
   friends_referred: number;
   referral_rewards_count: number;
   amount_transacted: number;
   balance_in_default_fiat : number;
   balance_in_customer_fiat : number;


      
     constructor(
      username,
      first_name,
     last_name,
      email_address,
      date_of_birth,
      preferred_language,
      fiat_currency_id,
      fiat_currency_code,
      in_app_notifications,
      app_screenshots,
      kyc_level_number,
      kyc_level_name ,
      loyalty_level,
      country_id,
      country_code,
      country_name_en,
      country_name_fr,
      friends_referred,
      referral_rewards_count,
      amount_transacted,
      balance_in_default_fiat,
      balance_in_customer_fiat 
      ){
         this.username= username;
         this.first_name =first_name;
         this.last_name =last_name;
         this. email_address = email_address;
         this.date_of_birth= date_of_birth;
      this.preferred_language = preferred_language;
      this.fiat_currency_id = fiat_currency_id;
      this.fiat_currency_code = fiat_currency_code;
      this.in_app_notifications = in_app_notifications;
      this.app_screenshots = app_screenshots;
      this.kyc_level_number= kyc_level_number;
      this.kyc_level_name = kyc_level_name ;
      this.loyalty_level = loyalty_level;
      this.country_id =country_id;
      this.country_code =country_code;
      this.country_name_en =country_name_en ;
      this.country_name_fr = country_name_fr;
      this.friends_referred =friends_referred ;
      this.referral_rewards_count = referral_rewards_count;
      this.amount_transacted = amount_transacted ;
      this.balance_in_default_fiat = balance_in_default_fiat;
      this.balance_in_customer_fiat = balance_in_customer_fiat; 
      
      }
    }




           /* 
           public username: string,
      public first_name: string,
      public last_name: string,
      public email_address: string,
      public date_of_birth: number,
      public preferred_language: string,
      public fiat_currency_id: number,
      public fiat_currency_code: string,
      public  in_app_notifications: boolean,
      public app_screenshots: boolean,
      public kyc_level_number: number,
      public kyc_level_name: string ,
      public loyalty_level: string ,
      public country_id:  number,
      public country_code : string,
      public country_name_en : string,
      public country_name_fr : string,
      public friends_referred:  number,
      public  referral_rewards_count:  number,
      public amount_transacted: number,
      public balance_in_default_fiat :number ,
     public balance_in_customer_fiat : number
           
           
           
           
           
           
           
           
           
           
           
           
           username: string ;
            first_name: string;
            last_name: string;
            email_address: string;
            date_of_birth?: number;
            preferred_language: string;
            fiat_currency_id: number;
            fiat_currency_code: string;
            in_app_notifications?: boolean;
            app_screenshots?: boolean;
            kyc_level_number: number;
            kyc_level_name : string;
            loyalty_level: string;
            country_id: number;
            country_code: string;
            country_name_en: string;
            country_name_fr: string;
            friends_referred: number;
            referral_rewards_count: numbe;
            amount_transacted: number;
            balance_in_default_fiat : number;
            balance_in_customer_fiat : number;
}*/

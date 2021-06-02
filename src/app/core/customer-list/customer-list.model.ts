export class CustomerList {
    constructor(
        username: string,
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
      ){}
    }




           /* username: string = '';
            first_name: string= '';
            last_name: string= '';
            email_address: string= '';
            date_of_birth?: number= 0;
            preferred_language: string= '';
            fiat_currency_id: number= 0;
            fiat_currency_code: string= '';
            in_app_notifications?: boolean;
            app_screenshots?: boolean;
            kyc_level_number: number= 0;
            kyc_level_name : string= '';
            loyalty_level: string= '';
            country_id: number= 0;
            country_code: string= '';
            country_name_en: string= '';
            country_name_fr: string= '';
            friends_referred: number= 0;
            referral_rewards_count: number= 0;
            amount_transacted: number= 0;
            balance_in_default_fiat : number= 0;
            balance_in_customer_fiat : number= 0;
}*/

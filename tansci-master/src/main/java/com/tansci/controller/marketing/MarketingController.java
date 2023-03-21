package com.tansci.controller.marketing;


import com.tansci.service.marketing.MarketingService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/marketing")
@Api(value = "marketing", tags = "营销")
public class MarketingController {

    @Autowired
    private MarketingService marketingService;


}
